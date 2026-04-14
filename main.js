// ================= GLOBAL STATE =================
let ALL_PRODUCTS = [];
let CURRENT_LINK = "https://s.shopee.co.id/5q4CZW9Exj";


// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof products !== "undefined") {
    ALL_PRODUCTS = [...products].reverse();
  }

  const category = getCategoryFromPage();
  renderProducts(filterByCategory(ALL_PRODUCTS, category));

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  renderWAButton();
});


// ================= CATEGORY =================
function getCategoryFromPage() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("abaya")) return "abaya";
  if (path.includes("fashion")) return "fashion";
  if (path.includes("jaket")) return "jaket";

  return "all";
}

function filterByCategory(list, category) {
  if (category === "all") return list;
  return list.filter(item => item.category === category);
}


// ================= RENDER =================
function renderProducts(list) {
  const container = document.getElementById("productList");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onclick="selectProduct('${product.link}')">

      <div class="card-content">
        <h3>${product.name}</h3>
        <p>${product.price}</p>

        <a href="${product.link}" target="_blank" class="btn-shopee"
           onclick="selectProduct('${product.link}')">
          Diskon Beli disini
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}


// ================= PILIH PRODUK =================
function selectProduct(link) {
  CURRENT_LINK = link;
}


// ================= SEARCH =================
function handleSearch(e) {
  const keyword = e.target.value.toLowerCase().trim();
  const category = getCategoryFromPage();

  if (keyword === "") {
    renderProducts(filterByCategory(ALL_PRODUCTS, category));
    return;
  }

  const result = ALL_PRODUCTS.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );

  renderProducts(result);
}


// ================= WA FLOAT =================
function renderWAButton() {
  if (document.querySelector(".wa-float")) return;

  const wa = document.createElement("a");
  wa.href = "#";
  wa.className = "wa-float";

  wa.onclick = function () {
    window.open(CURRENT_LINK, "_blank");
  };

  wa.innerHTML = `
    <img src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.jpg">
  `;

  document.body.appendChild(wa);
}