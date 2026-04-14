// ================= DATA PRODUK =================
const productList = document.getElementById("productList");

// ambil URL halaman (lebih stabil dari pathname)
const page = window.location.href;

// tentukan kategori
let category = "";

// ABAYA (index atau abaya page)
if (page.includes("index.html") || page.endsWith("/") || page.includes("abaya")) {
  category = "abaya";
}

// FASHION
else if (page.includes("fashion")) {
  category = "fashion";
}

// JAKET
else if (page.includes("jaket")) {
  category = "jaket";
}

// filter produk
const filteredProducts = products.filter(p => p.category === category);

// render
productList.innerHTML = filteredProducts.map(p => `
  <div class="card">
    <img src="${p.image}" alt="${p.name}">
    <div class="card-content">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a class="btn-shopee" href="${p.link}" target="_blank">Beli Sekarang</a>
    </div>
  </div>
`).join("");
