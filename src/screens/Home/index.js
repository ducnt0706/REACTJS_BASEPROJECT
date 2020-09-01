import React, { useEffect, useState } from "react";

import { productApi } from "../../api";
import "../../App.css";
const logo = require("../../logo.svg");

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log("Fail to fetch product list", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
