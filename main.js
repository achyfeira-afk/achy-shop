
// ================= ELEMENT =================
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// ================= CATEGORY DETECTION (FIX FINAL STABLE) =================
const path = window.location.pathname.toLowerCase();

let category = "";

if (path.includes("fashion")) {
  category = "fashion";
}
else if (path.includes("jaket")) {
  category = "jaket";
}
else {
  category = "abaya";
}

// ================= RENDER FUNCTION =================
function render(filterText = "") {

  const filteredProducts = products.filter(p => {
    const matchCategory = p.category === category;
    const matchSearch = p.name.toLowerCase().includes(filterText.toLowerCase());
    return matchCategory && matchSearch;
  });

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
}

// ================= INITIAL LOAD =================
render();

// ================= SEARCH EVENT =================
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    render(e.target.value);
  });
}
