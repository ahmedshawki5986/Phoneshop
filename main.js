// Function to add product to the cart
function addToCart(product) {
  // Get the current cart from localStorage or initialize an empty array
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new product to the cart
  cart.push(product);

  // Save the updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} has been added to your cart!`);
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      id: button.getAttribute("data-id"),
      name: button.getAttribute("data-name"),
      price: button.getAttribute("data-price"),
    };
    addToCart(product);
  });
});
