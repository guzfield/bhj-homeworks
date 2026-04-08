const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');

function updateCartVisibility() {
    const hasProducts = cartProducts.children.length > 0;
    if (hasProducts) {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
}

function updateQuantity(product, delta) {
    const quantityValue = product.querySelector('.product__quantity-value');
    let currentValue = parseInt(quantityValue.textContent);
    let newValue = currentValue + delta;
    
    if (newValue >= 1) {
        quantityValue.textContent = newValue;
    }
}

function addToCart(product) {
    const productId = product.getAttribute('data-id');
    const productImage = product.querySelector('.product__image').getAttribute('src');
    const quantityValue = parseInt(product.querySelector('.product__quantity-value').textContent);
    
    const existingProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);
    
    if (existingProduct) {
        const countElement = existingProduct.querySelector('.cart__product-count');
        const currentCount = parseInt(countElement.textContent);
        countElement.textContent = currentCount + quantityValue;
    } else {
        const cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.setAttribute('data-id', productId);
        
        const img = document.createElement('img');
        img.className = 'cart__product-image';
        img.setAttribute('src', productImage);
        
        const count = document.createElement('div');
        count.className = 'cart__product-count';
        count.textContent = quantityValue;
        
        const removeBtn = document.createElement('div');
        removeBtn.className = 'cart__product-remove';
        removeBtn.textContent = 'Удалить';
        removeBtn.style.cssText = 'cursor: pointer; color: red; margin-left: 10px; font-size: 12px;';
        
        removeBtn.addEventListener('click', () => {
            cartProduct.remove();
            updateCartVisibility();
        });
        
        cartProduct.appendChild(img);
        cartProduct.appendChild(count);
        cartProduct.appendChild(removeBtn);
        cartProducts.appendChild(cartProduct);
    }
    
    updateCartVisibility();
}

products.forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const addBtn = product.querySelector('.product__add');
    
    if (decBtn) {
        decBtn.addEventListener('click', () => updateQuantity(product, -1));
    }
    
    if (incBtn) {
        incBtn.addEventListener('click', () => updateQuantity(product, 1));
    }
    
    if (addBtn) {
        addBtn.addEventListener('click', () => addToCart(product));
    }
});

updateCartVisibility();