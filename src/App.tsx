import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

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

export async function fetchData() {
  const promise = axios.get("https://flask-server-agcpprbymq-ew.a.run.app/profiles")
  // const promise = axios.get("http://127.0.0.1:8080/profiles")
  const data = (await promise).data.slice(1);
  return data
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
