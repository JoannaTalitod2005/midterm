<script>
const products = [
    { id: 1, name: "Rambler 10 oz (296 ml) Stackable Mug Pink", price: 25.00, stock: 14, image: "product1.jpg" },
    { id: 2, name: "Rambler 10 oz (296 ml) Stackable Mug Black", price: 25.00, stock: 10, image: "product2.jpg" },
    { id: 3, name: "Rambler 10 oz (296 ml) Stackable Mug Navy", price: 25.00, stock: 17, image: "product3.jpg" },
    { id: 4, name: "Rambler 10 oz (296 ml) Stackable Mug Brown", price: 25.00, stock: 23, image: "product4.jpg" },
];

function renderProducts() {
    let html = '';
    products.forEach(product => {
        html += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Stock: ${product.stock}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
    });
    document.getElementById("product-list").innerHTML = html;
}

function addToCart(productId) {
    const product = products.find((p) => p.id === Number(productId));
    if (product && product.stock > 0) {
        product.stock--; // Deduct 1 from stock
        const message = { type: "ADD_TO_CART", product };
        processMessage(message);
        renderProducts(); // Re-render products to reflect stock change
    }
}

function processMessage(message) {
    if (message.type === "ADD_TO_CART") {
        const productName = message.product.name;
        document.getElementById("success-message").innerText = The ${productName} was added to the cart successfully.;
        const alert = document.getElementById("success-alert");
        alert.classList.remove("fade");
        alert.classList.add("show");
        setTimeout(() => {
            alert.classList.add("fade");
            alert.classList.remove("show");
        }, 3000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(); // Render products on page load
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id");
            addToCart(productId);
        });
    });
});
</script>