// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Mảng products (ít nhất 6 sản phẩm, ≥ 2 danh mục)
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Phone", true),
  new Product(2, "Samsung S24 Ultra", 32000000, 0, "Phone", true),
  new Product(3, "AirPods Pro 2", 6500000, 12, "Accessories", true),
  new Product(4, "Ốp lưng iPhone", 300000, 20, "Accessories", true),
  new Product(5, "Sạc nhanh 65W", 800000, 0, "Accessories", false),
  new Product(6, "MacBook Air M2", 28000000, 3, "Laptop", true)
];

// Câu 3: Mảng chỉ chứa name, price
const namePriceList = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3 - namePriceList:", namePriceList);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);

// Câu 5: Có ít nhất 1 sản phẩm giá > 30.000.000?
const hasVeryExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm giá > 30.000.000?", hasVeryExpensiveProduct);

// Câu 6: Tất cả sản phẩm "Accessories" có đang bán không?
const accessoriesProducts = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(p => p.isAvailable === true);
console.log('Câu 6 - Tất cả "Accessories" đang bán?', allAccessoriesAvailable);

// Câu 7: Tổng giá trị kho (price × quantity)
const totalInventoryValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
console.log("Câu 7 - Tổng giá trị kho hàng:", totalInventoryValue);

// Câu 8: for...of in ra Tên - Danh mục - Trạng thái
console.log("Câu 8 - Danh sách sản phẩm:");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: for...in in ra tên thuộc tính và giá trị (sản phẩm đầu tiên)
console.log("Câu 9 - Thuộc tính & giá trị của sản phẩm đầu tiên:");
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
const sellingAndInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log(
  "Câu 10 - Tên các sản phẩm đang bán và còn hàng:",
  sellingAndInStockNames
);

