import Category from "./category.json";
import Product from "./product.json";

const getProducts = () => {
  var promise = new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      resolve(Product);
    });
  });
  return promise;
};

const getCategory = () => {
  var promise = new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      resolve(Category);
    });
  });
  return promise;
};

export { getProducts, getCategory };
