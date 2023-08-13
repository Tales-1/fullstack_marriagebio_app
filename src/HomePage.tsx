import { useSearchParams } from "react-router-dom";
import FilterBtn from "./FilterBtn";
import Profiles from "./Profiles";
import Spinner from "./Spinner";
import "./App.css";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export interface Data {
  [key: string]: string;
}

export enum FilterOptions {
  NONE = "None",
  MALE = "Male",
  FEMALE = "Female",
  SENT = "Sent",
  UNSENT = "Unsent",
}

function HomePage({ profileData }: any) {
  const [searchParams, setSearchParams] = useSearchParams();
  let type = searchParams.get("type");

  return (
    <div className="layout">
      <h1 className="m-auto lg:text-5xl">
        Marriage profile Database
      </h1>

      <div className="flex w-full lg:w-3/5 m-auto p-3 gap-4 sticky top-0 bg-[#242424] border border-[#fbf6eb] rounded-lg z-20">
        <FilterBtn
          active={type}
          name="All"
          setFilter={(a: string) => setSearchParams(a)}
        />
        <FilterBtn
          active={type}
          name="Male"
          setFilter={(a: string) => setSearchParams(a)}
        />
        <FilterBtn
          active={type}
          name="Female"
          setFilter={(a: string) => setSearchParams(a)}
        />
        <FilterBtn
          active={type}
          name="Sent"
          setFilter={(a: string) => setSearchParams(a)}
        />
        <FilterBtn
          active={type}
          name="Unsent"
          setFilter={(a: string) => setSearchParams(a)}
        />
      </div>
      
      {profileData !== undefined ? (
            <PaginatedItems
              itemsPerPage={8}
              items={profileData}
              filter={type}
            />
      ) : (
        <div className="fixed h-screen w-screen text-center grid place-items-center">
          <Spinner />
        </div>
      )}
    </div>
  );
}

function PaginatedItems({ itemsPerPage, items, filter }: any) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Profiles profiles={currentItems} filter={filter} />
      <ReactPaginate
        containerClassName="pagination-container"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={14}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default HomePage;
