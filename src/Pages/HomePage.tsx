import { useSearchParams } from "react-router-dom";
import FilterBtn from "../components/FilterBtn";
import PaginatedItems from "../components/PaginatedItems";
import Spinner from "../components/Spinner";
import "../App.css";

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

function HomePage({ profileData }: any) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("type");

  const filteredProfiles = profileData?.filter((profile:any) => {
    if (filter === "All" || !filter) return profile;
    if (filter === "Sent") return profile[30].toLowerCase() === "yes";
    if (filter === "Unsent") return profile[30].toLowerCase() !== "yes";
    return filter === profile[3];
  });

  return (
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
      
      {filteredProfiles !== undefined ? (
            <PaginatedItems
              itemsPerPage={10}
              profiles={filteredProfiles}
              filter={filter}
            />
      ) : (
        <div className="fixed h-screen w-screen text-center grid place-items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}



export default HomePage;