import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBtn from "./FilterBtn";
import Profiles from "./Profiles";
import "./App.css";

export interface Data {
  [key: string]: string;
}

export enum FilterOptions { 
  NONE = "None",
  MALE = "Male",
  FEMALE = "Female",
  SENT = "Sent",
  UNSENT = "Unsent"
}


function App() {
  const [data, setData] = useState<Data[]>([]);
  
  const [searchParams, setSearchParams] = useSearchParams()
  let type = searchParams.get("type")

  function fetchData() {
    fetch("https://testsheets-agcpprbymq-ew.a.run.app/profiles")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error);
  }

  useEffect(() => {
    if (!data.length) {
      fetchData();
  }
  }, []);
 
  return (
    
    <div className="App h-screen w-screen grid grid-rows-6 grid-cols-3 lg:grid-cols-6">
      <h1 className="row-start-1 row-span-2 col-start-1 col-span-full m-auto lg:text-5xl">
        Marriage profile Database
      </h1>
      <div className="m-auto flex gap-6 lg:flex-col h-full lg:justify-between row-start-2 lg:row-start-3 lg:row-span-3 col-start-1 col-span-3 lg:col-span-1 w-full lg:w-2/3 lg:border-r-2 lg:pr-6">
        <FilterBtn active={type} name={"All"} setFilter={(e:string) => setSearchParams(e)} />
        <FilterBtn active={type} name={"Male"} setFilter={(e:string) => setSearchParams(e)} />
        <FilterBtn active={type} name={"Female"} setFilter={(e:string) => setSearchParams(e)} />
        <FilterBtn active={type} name={"Sent"} setFilter={(e:string) => setSearchParams(e)} />
        <FilterBtn active={type} name={"Unsent"} setFilter={(e:string) => setSearchParams(e)} />
      </div>
      <div className="flex flex-wrap gap-6 row-start-3 row-span-3 justify-center lg:justify-start col-start-1 lg:col-start-2 col-span-full w-full items-start">
        <Profiles profiles={data} filter={type} />
      </div>
    </div>
 
  );
}

export default App;
