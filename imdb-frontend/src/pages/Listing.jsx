import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Listing = () => {
  const { id } = useParams();
  const inputRef = useRef();
  let navigate = useNavigate();

  const handleClick = () => {
    const value = inputRef.current.value;
    const path = `/Listing/:${value}`;
    navigate(path);
  };

  return (
    <div>
      <h1>Lisintg Page with id : {id}</h1>
      <input ref={inputRef} placeholder="Please plase another id"></input>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Listing;
