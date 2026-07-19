let cart = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        button.innerHTML = "Added ✓";
        setTimeout(() => {
            button.innerHTML = "Add to Cart";
        }, 1000);

        console.log("Cart items:", cart);
    });
});
