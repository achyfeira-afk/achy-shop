// ================= SETUP =================
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// ================= RENDER =================
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

// ================= FILTER =================
function filterProducts() {
  const keyword = searchInput.value.toLowerCase();

  const result = products.filter(p => {
    // 🔥 LINTAS KATEGORI (INI KUNCINYA)
    const matchSearch = p.name.toLowerCase().includes(keyword);
    return matchSearch;
  });

  renderProducts(result);
}

// ================= LOAD AWAL =================
renderProducts(products);

// ================= EVENT SEARCH =================
searchInput.addEventListener("keyup", filterProducts);
