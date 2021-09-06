import React, { useEffect } from "react";
import * as api from "./api";

function App() {
  useEffect(() => {
    async function fetchData() {
      const products = await api.getProducts();
      console.log(products)

      // filter by category

      // map to title

      // get by id 
    }
    fetchData()
  }, []);

  return <div></div>;
}

export default App;
