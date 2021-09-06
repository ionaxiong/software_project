import React, { useEffect } from "react";
import * as api from "./api";

function App() {
  useEffect(() => {
    async function fetchData() {
      // get product from api
      const products = await api.getProducts();
      console.log(products);

      //print each product
      products.forEach((p) => console.log(p));

      //get category from api
      const categories = await api.getCategory();
      console.log(categories);

      //print each category
      categories.forEach((c) => console.log(c));

      //select id from category where title = "meat"
      //filter by category "meat"
      const meatCategoryId = categories.find(
        (category) => category.title === "meat"
      ).id;
      console.log(meatCategoryId);

      const meatProducts = products.filter(
        (product) => product.category === meatCategoryId
      );
      console.log(meatProducts);

      // map to title
      const productTitles = products.map((product) => product.title);
      console.log(productTitles);

      //sort products
      console.log({ ...products.sort() });

      //sort products by price
      console.log({ ...products.sort((a, b) => a.price - b.price) });

      //sort products by stocks
      console.log({ ...products.sort((a, b) => a.pcs - b.pcs) });

      // get by id
      const product = products.find((p) => p.id === "3");
      console.log(product);
    }
    fetchData();
  }, []);

  return <div></div>;
}

export default App;
