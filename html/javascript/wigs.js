function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

function addToCart(productName, price) {
    alert(`${productName} has been added to your cart for $${price}`);
}


document.addEventListener('DOMContentLoaded', () => {
    const wigProducts = [
        {
            name: 'Wig 1',
            image: 'images/wig1.jpg',
            price: 100,
            description: 'High-quality synthetic wig with a natural look.',
            rating: 4.5
        },
        {
            name: 'Wig 2',
            image: 'images/wig2.jpg',
            price: 120,
            description: 'Luxurious human hair wig, soft and durable.',
            rating: 5
        },
        {
            name: 'Wig 3',
            image: 'images/wig3.jpg',
            price: 150,
            description: 'Curly synthetic wig with a comfortable fit.',
            rating: 4
        },
        {
            name: 'Wig 4',
            image: 'images/wig4.jpg',
            price: 180,
            description: 'Straight human hair wig, easy to style.',
            rating: 4.8
        }
    ];

    const wigContainer = document.getElementById('wig-products');

    wigProducts.forEach(wig => {
        const wigElement = document.createElement('div');
        wigElement.classList.add('product');

        wigElement.innerHTML = `
            <img src="${wig.image}" alt="${wig.name}">
            <h3>${wig.name}</h3>
            <p>${wig.description}</p>
            <p>Price: $${wig.price}</p>
            <p>Rating: ${wig.rating} stars</p>
            <button onclick="addToCart('${wig.name}', ${wig.price})">Buy Now</button>
        `;

        wigContainer.appendChild(wigElement);
    });
});
