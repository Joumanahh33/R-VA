let cart = 0;

const buttons = document.querySelectorAll(".product button");
const cartCount = document.getElementById("cart-count");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        cartCount.textContent = cart;

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);
    });
});
