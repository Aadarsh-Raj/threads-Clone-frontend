import React, { useEffect } from "react";
import SearchCard from "./SearchCard";
import { StoreFunction } from "../Context/store";
import "./Styles/searchcomp.css";
const SearchComp = () => {
  const {
    userToken,
    apiUrl,
    searchSuggestion,
    setSearchSuggestion,
    loadSearchComp,
  } = StoreFunction();
  useEffect(() => {
    
  }, [loadSearchComp]);
  const searchUser = async (e) => {
    const searchProfileUrl = apiUrl + "user/search";
    try {
      const response = await fetch(searchProfileUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: userToken,
        },
        body: JSON.stringify({ keyword: e.target.value }),
      });

      const data = await response.json();
      console.log(data);
      if (data.result.length > 0) {
        setSearchSuggestion(data.result);
      } else {
        setSearchSuggestion([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <span>
            <svg
              aria-label="Search"
              role="img"
              viewBox="0 0 26 26"
              width={"20px"}
              class="x1lliihq xffa9am x1jwls1v x1n2onr6 x17fnjtu x3egl4o"
            >
              <title>Search</title>
              <path
                clip-rule="evenodd"
                d="M3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5C15.9183 3.5 19.5 7.08172 19.5 11.5C19.5 15.9183 15.9183 19.5 11.5 19.5C7.08172 19.5 3.5 15.9183 3.5 11.5ZM11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22C13.949 22 16.2023 21.1615 17.9883 19.756L22.3661 24.1339C22.8543 24.622 23.6457 24.622 24.1339 24.1339C24.622 23.6457 24.622 22.8543 24.1339 22.3661L19.756 17.9883C21.1615 16.2023 22 13.949 22 11.5C22 5.70101 17.299 1 11.5 1Z"
                fill="#565656"
                fill-rule="evenodd"
              ></path>
            </svg>
          </span>
          <input type="text" placeholder="Search" onChange={searchUser} />{" "}
        </div>
        {searchSuggestion &&
          searchSuggestion.map((ele) => (
            <SearchCard user={ele} key={ele.userName} />
          ))}
      </div>
    </>
  );
};

export default SearchComp;
