let allProducts = [];
let shownProducts = 0;
const loadCount = 5;
const loadMoreButton = document.getElementById("loadMore");
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    allProducts = data;
    displayProducts();
  });

function displayProducts() {
  const end = Math.min(shownProducts + loadCount, allProducts.length);
  for (let i = shownProducts; i < end; i++) {
    const p = allProducts[i];
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<img src="${p.image}" alt="${p.title}"><h3>${p.title}</h3><p>$${p.price}</p>`;
    div.onclick = () => window.location.href = `product.html?id=${p.id}`;
    productList.appendChild(div);
  }
  shownProducts = end;
  if (shownProducts >= allProducts.length) loadMoreButton.style.display = "none";
}

loadMoreButton.addEventListener("click", displayProducts);
searchInput.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const filtered = Array.from(productList.children).filter(child => 
    child.querySelector("h3").textContent.toLowerCase().includes(term));
  Array.from(productList.children).forEach(child => {
    child.style.display = filtered.includes(child) || !term ? "block" : "none";
  });
  if (!filtered.length && term) {
    if (!document.querySelector(".no-results")) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.textContent = "No products found.";
      productList.appendChild(noResults);
    }
  } else {
    const noResults = document.querySelector(".no-results");
    if (noResults) noResults.remove();
  }
});