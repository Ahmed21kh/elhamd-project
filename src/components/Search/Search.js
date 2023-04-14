import React, { useState } from "react";
import { SearchDiv } from "./Search.styled";
import { MdSearch } from "react-icons/md";
import "./Search.css";
import { Input } from "@mui/material";
export const Search = ({ handleChange, placeholder, myValue, myOnChange }) => {
  //  const [placeHolder = useState('')
  return (
    <div style={{ width: "100%" }}>
      <SearchDiv
        style={{ display: "flex", justifyContent: "center", width: "100%" ,paddingTop: "20px", marginBottom: "30px" }}
      >
          <div
            style={{
              width: "10%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              backgroundColor: "#2A2727",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              border: "none",
              boxShadow: "0px 0px 5px 3px  lightgrey",
            }}
          >
            <MdSearch style={{ fontSize: "20px", color: "white" }} />
          </div>
        <input
          onBlur={handleChange}
          className="inputSearch"
          type="search"
          value={myValue}
          onChange={myOnChange}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "5px",
            textAlign: "right",
            border: "none",
            fontSize: "20px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            boxShadow: "0px 0px 5px 3px  lightgrey",
          }}
        />

      </SearchDiv>
    </div>
  );
};
