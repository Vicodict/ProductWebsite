// ASYNC FUNCTION
document.addEventListener('DOMContentLoaded', () => {
    // NAVBAR MOBILE TOGGLE
        const menuIcon = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
    // console.log(navLinks.classList)
    
    
    // 
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        // 
        
        const productContainer = document.getElementById('product-container');
    
        // Async function to fetch and display products
        const fetchProducts = async () => {
            try {
                // Fetch data from DummyJSON API
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                const products = data.products;
    
                // Map through the products to generate the product cards
                const productCards = products.map(product => {
                    return `
                        <div class="product-card">
                            <img src="${product.thumbnail}" alt="${product.title}">
                            <h2>${product.title}</h2>
                            <p>${product.description.substring(0, 100)}...</p>
                            <p class="price">$${product.price}</p>
                        </div>
                    `;
                }).join(''); // Join the array of cards into a single string of HTML
    
                // Insert the product cards into the container
                productContainer.innerHTML = productCards;
            } catch (error) {
                // console.error('Error fetching data:', error);
                productContainer.innerHTML = '<p>Sorry, an error occurred while loading products.</p>';
            }
        };
    
        // Call the async function to fetch and display products
        fetchProducts();
    });
    