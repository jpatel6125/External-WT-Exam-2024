// Product data
const products = [
    {
        id: 1,
        name:"Bear",
        price: 169,
        rating: 4.5,
        image: "BEAR.jpg"
    },
    {
        id: 2,
        name: "Flower Vase",
        price: 368,
        rating: 4.0,
        image: "vase.jpg"
    },
    {
        id: 3,
        name: "Airpods",
        price: 598,
        rating: 4.9,
        image: "airpods.jpg"
    },
    {
        id: 4,
        name: "Women's Watch",
        price: 249,
        rating: 4.6,
        image: "watch.jpg"
    },
    {
        id: 5,
        name: "Instax Camera",
        price: 480,
        rating: 4.9,
        image: "camera.jpg"
    }
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating}/5</p>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="add-to-wishlist" onclick="addToWishlist(${product.id})">♡</button>
            </div>
        `;
        grid.appendChild(productCard);
    });

    updateCartCount();
    updateWishlistCount();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!cart.some(item => item.id === productId)) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!wishlist.some(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    }
}

function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    cartCountEl.textContent = cart.length;
}

function updateWishlistCount() {
    const wishlistCountEl = document.getElementById('wishlist-count');
    wishlistCountEl.textContent = wishlist.length;
}


renderProducts();
