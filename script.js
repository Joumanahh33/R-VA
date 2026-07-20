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

  cart.splice(index,1);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  openCart();

}



function closeCart() {

  let box = document.getElementById("cart-box");

  if(box){
    box.style.display = "none";
  }

}



updateCartCount();
