import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Profiles from "./Profiles";

interface PaginatedItemsProps{
    itemsPerPage:number
    profiles:any[]
    filter:string | null
}

const PaginatedItems:React.FC<PaginatedItemsProps> = ({ itemsPerPage, profiles, filter}) => {
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(profiles.length / itemsPerPage);
  
    useEffect(() => {
      setItemOffset(0)
      let test = Array.from(document.getElementsByClassName("pagination-container")[0]?.children);
      test.forEach(test => test.classList.remove("selected"))
      test[1].classList.add("selected")
    }, [filter])
  
    useEffect(() => {
      if(itemOffset !== 0){
        let test = Array.from(document.getElementsByClassName("pagination-container")[0]?.children);
        test[1].classList.remove("selected")
      }
    }, [itemOffset])
  
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % profiles.length;
      setItemOffset(newOffset);
    };
  
    const currentItems = profiles.slice(itemOffset, endOffset);
    return (
      <>
        <Profiles profiles={currentItems} />
        <ReactPaginate
          containerClassName="pagination-container text-white"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={10}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  export default PaginatedItems;