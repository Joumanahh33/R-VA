let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("Added to cart ✅");
}

function updateCartCount() {
  let count = document.getElementById("cart-count");

  if (count) {
    count.innerHTML = cart.length;
  }
}

function openCart() {
  let box = document.getElementById("cart-box");
  let items = document.getElementById("cart-items");
  let total = document.getElementById("cart-total");

  if (!box || !items || !total) return;

  cart = JSON.parse(localStorage.getItem("cart")) || [];

  box.style.display = "block";
  items.innerHTML = "";

  let sum = 0;

  cart.forEach(function(item) {
    items.innerHTML += `
      <p>${item.name} - ${item.price} EGP</p>
    `;
    sum += Number(item.price);
  });

  total.innerHTML = sum;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  openCart();
}

updateCartCount();
function openCart() {
  let box = document.getElementById("cart-box");
  let items = document.getElementById("cart-items");
  let total = document.getElementById("cart-total");

  if (!box || !items || !total) return;

  box.style.display = "block";
  items.innerHTML = "";

  let sum = 0;

  cart.forEach(item => {
    items.innerHTML += `
      <p>${item.name} - ${item.price} EGP</p>
    `;
    sum += item.price;
  });

  total.innerHTML = sum;
}

function closeCart() {
  document.getElementById("cart-box").style.display = "none";
}
