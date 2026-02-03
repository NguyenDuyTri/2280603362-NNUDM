function Product(id,name,price,quantity,category,isAvailable){
this.id=id;
this.name=name;
this.price=price;
this.quantity=quantity;
this.category=category;
this.isAvailable=isAvailable;
}

const products=[
new Product(1,"iPhone",32000000,5,"Phone",true),
new Product(2,"Samsung",25000000,0,"Phone",true),
new Product(3,"MacBook",35000000,3,"Laptop",true),
new Product(4,"Chuột",500000,10,"Accessories",true),
new Product(5,"Bàn phím",1500000,2,"Accessories",false),
new Product(6,"iPad",20000000,4,"Tablet",true),
];

// ===== Hiển thị bảng =====
const table=document.getElementById("productTable");
table.innerHTML=`
<tr>
<th>ID</th><th>Tên</th><th>Giá</th><th>Số lượng</th>
<th>Danh mục</th><th>Trạng thái</th>
</tr>`;

products.forEach(p=>{
table.innerHTML+=`
<tr>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.price.toLocaleString()}</td>
<td>${p.quantity}</td>
<td>${p.category}</td>
<td>
<span class="badge ${p.isAvailable?'green':'red'}">
${p.isAvailable?'Đang bán':'Ngừng bán'}
</span>
</td>
</tr>`;
});

const result=document.getElementById("result");

// ===== Gắn hàm vào window (FIX LỖI) =====

window.runCau3=function(){
result.textContent=JSON.stringify(
products.map(p=>({name:p.name,price:p.price})),null,2);
}

window.runCau4=function(){
result.textContent=JSON.stringify(
products.filter(p=>p.quantity>0),null,2);
}

window.runCau5=function(){
result.textContent=products.some(p=>p.price>30000000);
}

window.runCau6=function(){
result.textContent=
products.filter(p=>p.category==="Accessories").every(p=>p.isAvailable);
}

window.runCau7=function(){
result.textContent=
products.reduce((s,p)=>s+p.price*p.quantity,0);
}

window.runCau8=function(){
let s="";
for(const p of products){
s+=`${p.name} - ${p.category} - ${p.isAvailable?"Đang bán":"Ngừng bán"}\n`;
}
result.textContent=s;
}

window.runCau9=function(){
let s="";
for(const k in products[0]){
s+=`${k}: ${products[0][k]}\n`;
}
result.textContent=s;
}

window.runCau10=function(){
result.textContent=
products.filter(p=>p.isAvailable&&p.quantity>0).map(p=>p.name).join(", ");
}
