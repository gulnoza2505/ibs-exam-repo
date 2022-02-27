import React, { useState } from "react";
import { SearchContainer } from "./style";
import search from "../../assets/image/search.svg";
import notification from "../../assets/image/notification.png";

function Search() {
  
  return (
    <SearchContainer>
      <div className="search">
        <div className="input">
          <input
            type="search"
            name="Search Product"
            placeholder="Search Product"
          />
          <img src={search} />
        </div>
        <div className="search-right">
          <img src={notification} />
          <div className="myName">
            {/* <img src={myImage} className="myImg" /> */}
            <h1>Gulnoza</h1>
          </div>
        </div>
      </div>
    </SearchContainer>
  );
}

export default Search;
