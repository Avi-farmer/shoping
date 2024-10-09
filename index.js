
        let cart = [];
        function updateCartCount() {
            const cartCount = document.getElementById('cart');
            cartCount.innerText = cart.length;
        }
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-name');
                const productPrice = button.getAttribute('data-price');
                cart.push({productName, productPrice });
                updateCartCount();
                alert("sucessfully add your cart");
            });
        });
