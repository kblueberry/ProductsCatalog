export const fetchProducts = () => {
  return fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .catch((error) => console.error(`An error occurred: ${error.message}`));
};
