const products = JSON.parse(localStorage.getItem("products")) || [];

function createProduct(name) {
  const lastId = products[products.length - 1]?.id || 0;
  return { id: lastId + 1, name, checked: false };
}

const SORTS = {
  ASC: "asc",
  DESC: "desc",
};

const list = document.getElementById("product-list");
const sortElement = document.getElementById("sort-select");
const filterInput = document.getElementById("filter-input");
const addButton = document.getElementById("add-button");
const addInput = document.getElementById("add-input");

filterInput.addEventListener("input", renderList);
sortElement.addEventListener("change", renderList);

addButton.addEventListener("click", function () {
  const productName = addInput.value.trim();
  if (!productName) {
    return;
  }
  const newProduct = createProduct(productName);
  products.push(newProduct);
  filterInput.value = "";
  addInput.value = "";
  localStorage.setItem("products", JSON.stringify(products));
  renderList();
});

function renderList() {
  // list.innerHTML = ``;
  list.replaceChildren();
  const sortedProducts =
    sortElement.value === SORTS.ASC
      ? products.toSorted((a, b) => a.name.localeCompare(b.name))
      : products.toSorted((a, b) => b.name.localeCompare(a.name));

  sortedProducts.forEach((product) => {
    const check = filter(product.name, filterInput.value);
    if (!check) {
      return;
    }

    const item = document.createElement("li");
    const input = document.createElement("input");
    const text = document.createTextNode(product.name);
    input.setAttribute("type", "checkbox");
    input.checked = product.checked;
    input.onchange = function (event) {
      product.checked = event.target.checked;
      localStorage.setItem("products", JSON.stringify(products));
    };
    item.appendChild(input);
    item.appendChild(text);

    list.appendChild(item);
  });
}

function filter(elementText, filterValue) {
  return elementText.startsWith(filterValue);
}

renderList();
