const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// ================= CATEGORY FIX (STABIL 100%) =================
const path = window.location.pathname.toLowerCase();

let category = "abaya";

if (path.includes("fashion")) {
  category = "fashion";
}
else if (path.includes("jaket")) {
  category = "jaket";
}

// ================= RENDER SYSTEM =================
function render(keyword = "") {

  const filtered = products.filter(p => {

    const matchCategory = p.category === category;

    const matchSearch =
      p.name.toLowerCase().includes(keyword.toLowerCase());

    return matchCategory && matchSearch;
  });

  productList.innerHTML = filtered.map(p => `
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

// ================= INIT =================
render();

// ================= SEARCH GLOBAL =================
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    render(e.target.value);
  });
}
