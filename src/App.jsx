import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Header from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
