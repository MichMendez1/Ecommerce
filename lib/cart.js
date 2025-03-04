// Guardar el carrito en localStorage
export const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  // Obtener el carrito desde localStorage
  export const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  // Agregar un producto al carrito
  export const addToCart = (product, quantity = 1) => {
    const cart = getCartFromLocalStorage();
    const existingProduct = cart.find((item) => item._id === product._id);
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
  
    saveCartToLocalStorage(cart);
    return cart;
  };
  
  // Eliminar un producto del carrito
  export const removeFromCart = (productId) => {
    const cart = getCartFromLocalStorage().filter((item) => item._id !== productId);
    saveCartToLocalStorage(cart);
    return cart;
  };
  
  // Actualizar la cantidad de un producto en el carrito
  export const updateCartItemQuantity = (productId, quantity) => {
    const cart = getCartFromLocalStorage();
    const product = cart.find((item) => item._id === productId);
  
    if (product) {
      product.quantity = quantity;
      saveCartToLocalStorage(cart);
    }
  
    return cart;
  };
  
  // Calcular el total del carrito
  export const calculateCartTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };