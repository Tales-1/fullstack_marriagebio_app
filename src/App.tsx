import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../Authentication"
import "./App.css";
import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Spinner from "./components/Spinner";

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


function App() {
  const [user, loading ] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(()=>{
    if (loading) {
        // trigger loading screen
        return
    }
    if (user) {
        navigate("/")
    }

},[user,loading])
  
if(loading) return <Spinner />

  return (
    <Routes>
      <Route path="/" element={user ? <HomePage /> : <Login />} />
    </Routes>
  );
}

export default App;


