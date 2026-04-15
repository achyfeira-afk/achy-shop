const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// DETEKSI HALAMAN
const page = window.location.href;

let category = "";

if (page.includes("abaya") || page.includes("index")) {
  category = "abaya";
} else if (page.includes("fashion")) {
  category = "fashion";
} else if (page.includes("jaket")) {
  category = "jaket";
}

// RENDER
function renderProducts(list) {
  productList.innerHTML = list.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a class="btn-shopee" href="${p.link}" target="_blank">Beli Sekarang</a>
      </div>
    </div>
  `).join("");
}

// FILTER (INI KUNCI FIX)
function filterProducts() {
  const keyword = searchInput.value.toLowerCase();

  let result;

  if (keyword === "") {
    // ✅ NORMAL (tidak search → per kategori)
    result = products.filter(p => p.category === category);
  } else {
    // ✅ SEARCH (lintas kategori)
    result = products.filter(p =>
      p.name.toLowerCase().includes(keyword)
    );
  }

  renderProducts(result);
}

// LOAD AWAL
filterProducts();

// EVENT
searchInput.addEventListener("keyup", filterProducts);
