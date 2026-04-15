document.addEventListener("DOMContentLoaded", function () {

  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");

  // CEK ELEMENT (biar tidak error)
  if (!productList || !searchInput) return;

  // DETEKSI HALAMAN
  const page = window.location.href.toLowerCase();

  let category = "abaya"; // default aman

  if (page.includes("fashion")) {
    category = "fashion";
  } else if (page.includes("jaket")) {
    category = "jaket";
  }

  // RENDER PRODUK
  function renderProducts(list) {
    if (!list || list.length === 0) {
      productList.innerHTML = "<p>Produk tidak ditemukan</p>";
      return;
    }

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

  // FILTER PRODUK
  function filterProducts() {
    const keyword = searchInput.value.toLowerCase();

    let result;

    if (keyword === "") {
      result = products.filter(p => p.category === category);
    } else {
      result = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
      );
    }

    renderProducts(result);
  }

  // LOAD AWAL (WAJIB BIAR LANGSUNG MUNCUL)
  filterProducts();

  // EVENT SEARCH
  searchInput.addEventListener("keyup", filterProducts);

});
