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
  let cartBox = document.getElementById("cart-items");

  if (!cartBox) return;

  cartBox.innerHTML = "";

  cart.forEach((item, index) => {
    cartBox.innerHTML += `
      <p>
      ${item.name} - ${item.price} EGP
      <button onclick="removeFromCart(${index})">Remove</button>
      </p>
    `;
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  openCart();
}

updateCartCount();
