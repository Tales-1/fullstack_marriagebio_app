import { useSearchParams } from "react-router-dom";
import FilterBtn from "../components/FilterBtn";
import PaginatedItems from "../components/PaginatedItems";
import Spinner from "../components/Spinner";
import "../App.css";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import axios from "axios";
import { logout } from "../../Authentication";

export interface Data {
  [key: string]: string;
}

export enum FilterOptions {
  ALL = "All",
  MALE = "Male",
  FEMALE = "Female",
  SENT = "Sent",
  UNSENT = "Unsent",
}

async function fetchData() {
  const promise = axios.get(
    "https://marriage-server-agcpprbymq-ew.a.run.app/profiles"
  );
  // const promise = axios.get("http://127.0.0.1:8080/profiles")
  const data = (await promise).data.slice(1);
  return data;
}

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("type");

  const { isLoading, error, data, isFetching } = useQuery(
    ["fetchData"],
    fetchData,
    {
      staleTime: 10 * (60 * 1000), // 10 mins
      cacheTime: 15 * (60 * 1000), // 15 mins
    }
  );

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <p>
        An Error has occured while retrieving data. Try refreshing the page. If
        that doesn't work, contact your adminstrator.
      </p>
    );

  const filteredProfiles = (data as any).filter((profile: any) => {
    if (filter === "All" || !filter) return profile;
    if (filter === "Sent") return profile["Sent"].toLowerCase() === "yes";
    if (filter === "Unsent") return profile["Sent"].toLowerCase() !== "yes";
    return filter === profile["Gender"];
  });

  return (
    <>
      <button className="ml-4 mt-2" onClick={() => logout()}>Log Out</button>
      <div className="layout">
        <h1 className="mt-8 text-2xl self-center mx-auto lg:text-4xl">
          Marriage Profile Database
        </h1>

        <div className="flex w-full lg:w-2/5 m-auto p-3 gap-4 sticky top-0 bg-[#242424] border border-[#fbf6eb] rounded-lg z-20">
          <FilterBtn
            active={filter}
            name="All"
            setFilter={(a: string) => setSearchParams(a)}
          />
          <FilterBtn
            active={filter}
            name="Male"
            setFilter={(a: string) => setSearchParams(a)}
          />
          <FilterBtn
            active={filter}
            name="Female"
            setFilter={(a: string) => setSearchParams(a)}
          />
          <FilterBtn
            active={filter}
            name="Sent"
            setFilter={(a: string) => setSearchParams(a)}
          />
          <FilterBtn
            active={filter}
            name="Unsent"
            setFilter={(a: string) => setSearchParams(a)}
          />
        </div>

        <div>{isFetching ? "Updating..." : ""}</div>

        <PaginatedItems
          itemsPerPage={10}
          profiles={filteredProfiles}
          filter={filter}
        />
        <ReactQueryDevtools initialIsOpen />
      </div>
    </>
  );
}

export default HomePage;
