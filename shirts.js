
    
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
