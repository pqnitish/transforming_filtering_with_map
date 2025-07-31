function processProducts(products) {
  // used map to extract product name
  const productNames = products.map((product) => product.name);

  productNames.forEach((name, index) => {
    const price = products[index].price;
    if (price > 50) {
      console.log(`${name} is above $50`);
    } else {
      console.log(`${name} is below $50`);
    }
  });
}
const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];
processProducts(input);
