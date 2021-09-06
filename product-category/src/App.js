import React, { useEffect } from "react";
import * as api from "./api";

function App() {
  useEffect(() => {
    async function fetchData() {
      console.log("****************************************");
      console.log("get product from api");
      const products = await api.getProducts();
      console.log(products);

      console.log("****************************************");
      console.log("print each product");
      products.forEach((p) => console.log(p));

      console.log("****************************************");
      console.log("get category from api");
      const categories = await api.getCategory();
      console.log(categories);

      console.log("****************************************");
      console.log("//print each category");
      categories.forEach((c) => console.log(c));

      console.log("****************************************");
      console.log("select id from category where title = 'meat'");
      console.log("filter by category 'meat'");
      const meatCategoryId = categories.find(
        (category) => category.title === "meat"
      ).id;
      console.log(meatCategoryId);

      const meatProducts = products.filter(
        (product) => product.category === meatCategoryId
      );
      console.log(meatProducts);

      console.log("****************************************");
      console.log("map to title");
      const productTitles = products.map((product) => product.title);
      console.log(productTitles);

      console.log("****************************************");
      console.log("sort products");
      console.log({ ...products.sort() });

      console.log("****************************************");
      console.log("sort products by price");
      console.log({ ...products.sort((a, b) => a.price - b.price) });

      console.log("****************************************");
      console.log("sort products by stocks");
      console.log({ ...products.sort((a, b) => a.pcs - b.pcs) });

      console.log("****************************************");
      console.log("get by id");
      const product = products.find((p) => p.id === "3");
      console.log(product);

      console.log("****************************************");
      console.log("get type of the data in the product keys");
      products.map((p) =>
        console.log(
          typeof p.id,
          typeof p.title,
          typeof p.price,
          typeof p.date,
          typeof p.pcs,
          typeof p.category
        )
      );
    }
    fetchData();
  }, []);

  return <div></div>;
}

export default App;
