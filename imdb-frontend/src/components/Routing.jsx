import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>I am About page Component.</h1>{" "}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>I am Home page Component.</h1>
    </div>
  );
};

const Listing = () => {
  return (
    <div>
      <h1>I am Listing page Component.</h1>
    </div>
  );
};

const PageNotFound = () => {
  return (
    <div>
      <h1>404 Page Not Found. </h1>
    </div>
  );
};

const Routing = () => {
  return (
    <>
      <h1>Routing Example</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="*" element={<PageNotFound></PageNotFound>} />
      </Routes>
    </>
  );
};

export default Routing;
