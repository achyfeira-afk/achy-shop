
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

const path = window.location.pathname.toLowerCase();

let category = "abaya";

if (path.includes("fashion")) {
  category = "fashion";
}
else if (path.includes("jaket")) {
  category = "jaket";
}

function render(keyword = "") {

  const filtered = products.filter(p => {
    const matchCategory = p.category === category;
    const matchSearch = p.name.toLowerCase().includes(keyword.toLowerCase());
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

render();

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    render(e.target.value);
  });
}
