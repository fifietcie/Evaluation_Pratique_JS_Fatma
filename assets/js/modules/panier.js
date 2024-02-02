
export function initCart() {
    let cartCount = 0;
    const cartBadge = document.getElementById('cart-badge');
  
    function updateCartBadge() {
      cartBadge.textContent = cartCount;
      cartBadge.style.display = cartCount > 0 ? 'block' : 'none';
    }
  
    function addToCart() {
      cartCount++;
      updateCartBadge();
    }
  
   
    function attachEventToShopNowButtons() {
      const shopNowButtons = document.querySelectorAll('.shop-now-btn');
      shopNowButtons.forEach(button => {
        button.addEventListener('click', addToCart);
      });
    }
  
   
    return {
      attachEventToShopNowButtons,
      updateCartBadge
    };
  }
  