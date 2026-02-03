// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2: Mảng products (ít nhất 6 sản phẩm, ≥2 danh mục)
const products = [
  new Product(1, "iPhone 15", 32000000, 5, "Phone", true),
  new Product(2, "Samsung S23", 28000000, 0, "Phone", true),
  new Product(3, "MacBook Air", 35000000, 3, "Laptop", true),
  new Product(4, "Chuột Logitech", 500000, 10, "Accessories", true),
  new Product(5, "Bàn phím cơ", 1500000, 2, "Accessories", false),
  new Product(6, "iPad", 20000000, 4, "Tablet", true),
];

// Câu 3: Mảng mới chỉ chứa name và price
const namePrice = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3:", namePrice);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStock = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStock);

// Câu 5: Có ít nhất 1 sản phẩm giá > 30.000.000?
const hasExpensive = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensive);

// Câu 6: Tất cả sản phẩm Accessories có đang bán không?
const accessoriesAvailable = products
  .filter(p => p.category === "Accessories")
  .every(p => p.isAvailable === true);
console.log("Câu 6:", accessoriesAvailable);

// Câu 7: Tổng giá trị kho (price * quantity)
const totalValue = products.reduce(
  (sum, p) => sum + p.price * p.quantity,
  0
);
console.log("Câu 7: Tổng giá trị kho =", totalValue);

// Câu 8: for...of in tên – danh mục – trạng thái
console.log("Câu 8:");
for (const p of products) {
  console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9: for...in in tên thuộc tính và giá trị
console.log("Câu 9:");
for (const key in products[0]) {
  console.log(key, ":", products[0][key]);
}

// Câu 10: Danh sách tên sản phẩm đang bán và còn hàng
const sellingInStockNames = products
  .filter(p => p.isAvailable && p.quantity > 0)
  .map(p => p.name);

console.log("Câu 10:", sellingInStockNames);
