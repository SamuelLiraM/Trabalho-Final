let products = [];
let editingIndex = -1;

function renderProductList() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} 
                    <button onclick="editProduct(${index})">Editar</button>
                    <button onclick="deleteProduct(${index})">Excluir</button>`;
    productList.appendChild(li);
  });
}

function openAddProductModal() {
  editingIndex = -1;
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productModal").style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

function saveProduct() {
  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;

  if (productName && productPrice) {
    const product = { name: productName, price: productPrice };

    if (editingIndex === -1) {
      products.push(product);
    } else {
      products[editingIndex] = product;
      editingIndex = -1;
    }

    renderProductList();
    closeModal();
  }
}

function editProduct(index) {
  editingIndex = index;
  const product = products[index];
  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productModal").style.display = "block";
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderProductList();
}
