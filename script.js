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

  cart.forEach(function(item, index) {

    items.innerHTML += `
      <p>
        ${item.name} - ${item.price} EGP
        <button onclick="removeFromCart(${index})">
          Remove
        </button>
      </p>
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

function closeCart() {

  let box = document.getElementById("cart-box");

  if (box) {
    box.style.display = "none";
  }

}

function checkout() {

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  document.getElementById("checkout-box").style.display = "block";

                                         }
function sendOrder() {

  let name = document.getElementById("customer-name").value;
  let phone = document.getElementById("customer-phone").value;
  let address = document.getElementById("customer-address").value;

  if (name === "" || phone === "" || address === "") {
    alert("Please fill all information");
    return;
  }

  let products = "";

  cart.forEach(function(item) {
    products += item.name + " (" + item.price + " EGP), ";
  });

  let total = 0;

  cart.forEach(function(item) {
    total += Number(item.price);
  });

  fetch("https://script.google.com/macros/s/AKfycbxuyXbcIjiguYKH6eAgKzsNujsgnv8v8QCQWVOOM6AXygyrbBmJj_gKdJ0zl2OHHq-Z3w/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      phone: phone,
      address: address,
      governorate: "",
      products: products,
      total: total
    })
  })
  .then(response => response.json())
  .then(() => {

    alert("Order sent successfully ✅");

    cart = [];
    localStorage.removeItem("cart");
    updateCartCount();

    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("cart-total").innerHTML = "0";

    closeCheckout();
    closeCart();

  })
  .catch(() => {
    alert("Error sending order");
  });

}

function closeCheckout() {

  document.getElementById("checkout-box").style.display = "none";

}

updateCartCount();
