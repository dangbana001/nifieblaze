let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(product + ' has been added to your cart.');
    console.log(cart);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
