const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

const page = window.location.href;

let category = "";

if (page.includes("index.html") || page.endsWith("/") || page.includes("abaya")) {
  category = "abaya";
}
else if (page.includes("fashion")) {
  category = "fashion";
}
else if (page.includes("jaket")) {
  category = "jaket";
}

const filteredProducts = products.filter(p => p.category === category);

function render(list) {
  productList.innerHTML = list.map(p => `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a class="btn-shopee" href="${p.link}" target="_blank">Beli Sekarang</a>
    </div>
  `).join("");
}

render(filteredProducts);

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    const filtered = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(keyword)
    );

    render(filtered);
  });
}
