

$(document).ready(function() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCartIcon() {
let totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
$(".cart-quantity-display").text(totalQuantity); // Update the text content of the span with the total quantity
}

function updateLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage with the cart items
    }


    $(".add-cart1").on("click", function() {
        let productId = $(this).attr("id");
        let productTitle = $(`#${productId}`).data("product");
        let productPrice = $(this).data("price");
        let productImg = $(this).data("img");
        // Create an object to hold the product details
        let product = {
            id: productId,
            title: productTitle,
            price: productPrice,
            img: productImg,
            quantity: 1 // You can modify this to increase the quantity if the item is already in the cart
        };

        // Check if the item already exists in the cart based on its ID
        let existingItem = cartItems.find(item => item.id === productId);

        if (!existingItem) {
            cartItems.push(product); // Add the product to the cartItems array
        } else {
            // If the item exists, you can increment its quantity or handle it as needed
            existingItem.quantity++;
        }

        updateCart(); // Update the cart UI (you can implement this function)
        updateCartIcon();
        updateLocalStorage();
    });

    // Function to update the cart UI
    function updateCart() {
        let totalPrice = 0;
        let cartContent = $(".cart-content");

        cartContent.empty(); // Clear the existing cart content

        cartItems.forEach(item => {
            
            let price = parseInt(item.price); // Ensure item.price is treated as a number
            let quantity = parseInt(item.quantity); // Ensure item.quantity is treated as a number
    
            totalPrice += price * quantity;
                
            

            // Append the item details to the cart content
            cartContent.append(`
                <div class="cart-box" data-id="${item.id}">
                    <img src="${item.img}" alt="" class="cart-img" />
                    <div class="detail-box">
                        <div class="cart-product-title">${item.title}</div>
                        <div class="cart-price">$${item.price}</div>
                        <input type="number" name="" min="1" value="${item.quantity}" class="cart-quantity">
                    </div>
                    <i class="bx bx-trash-alt cart-remove"data-id="${item.id}"></i>
                </div>
            `);
        });

        $(".total-price").text(`$${totalPrice}`); // Update the total price in the cart
        console.log(totalPrice);

        $(".cart-remove").on("click", function() {
            const itemId = $(this).data("id");

            // Remove the item from cartItems array
            cartItems = cartItems.filter(item => item.id !== itemId);

            // Update the cart UI after removing the item
            updateCart();
            updateCartIcon();
            updateLocalStorage();
        });

        $(".cart-quantity").on("change", function() {
            const itemId = $(this).closest(".cart-box").data("id");
            const newQuantity = parseInt($(this).val()) || 0; // Get the entered quantity

            // Update the quantity for the corresponding item in cartItems array
            cartItems = cartItems.map(item => {
                if (item.id === itemId) {
                    item.quantity = newQuantity;
                }
                return item;
            });

            updateCart(); // Update the cart UI after changing the quantity
            updateCartIcon();
            updateLocalStorage();
        });
    }

    function populateCartOnLoad() {
        if (cartItems.length > 0) {
            updateCart();
            updateCartIcon();

            let totalPriceOnLoad = cartItems.reduce((total, item) => {
                total += item.price * item.quantity;
                return total;
            }, 0);
    
            $('#price-t').html("$"+totalPriceOnLoad);
        }
    }

    populateCartOnLoad();
    

    $('.btn-buy').on("click", function(){
        if(cartItems.length > 0) {
            window.location.href = "jazzcash.html";
        }
        else{
            $('.cart-content').html(`<div class="alert mt-2 alert-warning alert-dismissible fade show" role="alert">
            No Items In Your Cart
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`)
        }
    });
});







$(document).ready(function() {
let cartIcon = $("#cart-icon");
let cart = $(".cart");
let closeCart = $("#close-cart");

cartIcon.on("click", function() {
    cart.css({right:"0", transition: "0.5s cubic-bezier(0.075, 0.82, 0.165, 1"})
})


closeCart.on("click", function() {
    cart.css({right:"-100%", transition: "4.5s cubic-bezier(0.075, 0.82, 0.165, 1"})
});
});





$(document).ready(function(){
    
});