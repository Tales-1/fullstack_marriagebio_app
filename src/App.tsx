import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";

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

  const [data, setData] = useState<Data>()

  function fetchData() {
    fetch("https://testsheets-agcpprbymq-ew.a.run.app/profiles")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error);
  }

  useEffect(() => {
    if (!data?.length) {
      fetchData();
  }
  }, []);

  return (    
    <Routes>
        <Route path = "/" element = {<HomePage profileData = {data} />} />
        <Route path = "/profilepage/:profileId" element = {<ProfilePage profileData = {data} />} />
    </Routes>
  );
}

export default App;
