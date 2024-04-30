import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Serviec from "./components/pages/Serviec";
import Blog from "./components/pages/Blog";
import Notfound from "./components/pages/Notfound";
import Footer from "./components/Footer/Footer";

export default function d() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Serviec />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}
