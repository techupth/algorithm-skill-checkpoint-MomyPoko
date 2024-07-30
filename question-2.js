function findProductPrice(products, name) {
  // Your code here
  let left = 0;
  let right = products.length - 1;
  let index = -1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (products[middle].name === name) {
      return products[middle].price;
    } else if (products[middle].name < name) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return index;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
