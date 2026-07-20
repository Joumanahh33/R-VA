let cart = 0;
let total = 0;

const buttons = document.querySelectorAll(".product button");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalText = document.getElementById("total");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const product = button.parentElement;
        const name = product.querySelector("h3").textContent;
        const priceText = product.querySelector("p").textContent;
        const price = parseInt(priceText);

        cart++;
        total += price;

        cartCount.textContent = cart;
        totalText.textContent = `Total: ${total} EGP`;

        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <p>${name} - ${price} EGP</p>
            <button class="remove-btn">Remove</button>
        `;

        item.querySelector(".remove-btn").addEventListener("click", () => {
            cart--;
            total -= price;

            cartCount.textContent = cart;
            totalText.textContent = `Total: ${total} EGP`;

            item.remove();
        });

        cartItems.appendChild(item);

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);

    });
});

function openCart(){
    document.getElementById("cart-box").style.display = "block";
}

function closeCart(){
    document.getElementById("cart-box").style.display = "none";
}
