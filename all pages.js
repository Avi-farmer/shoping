
    
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.length;
        document.getElementById('cart').textContent = cartCount;
    }

   
    function addToCart(event) {
        const productId = event.target.getAttribute('data-id');
        const productName = event.target.getAttribute('data-name');
        const productPrice = parseInt(event.target.getAttribute('data-price'), 10);

       
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

       
        cart.push({productId,productName,productPrice });

       
        localStorage.setItem('cart', JSON.stringify(cart));

        
        updateCartCount();
    }

    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    
    window.addEventListener('load', updateCartCount);

    document.getElementById('submit').addEventListener('click', function() {
    // Get the minimum and maximum price values
    const minPrice = parseFloat(document.getElementById('min').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max').value) || Infinity;

    // Get all products
    const products = document.querySelectorAll('.product');

    // Loop through each product and filter based on the price
    products.forEach(product => {
        const price = parseFloat(product.querySelector('p').getAttribute('data-price'));

        // Show product if it falls within the price range
        if (price >= minPrice && price <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
