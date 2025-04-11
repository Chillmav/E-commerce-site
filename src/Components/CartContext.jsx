import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addToCart(item, ref) {

        const count = Number(ref.current.value)
        setCart(prevCart => {

            const existingItemIndex = prevCart.findIndex(i => i.id === item.id);
            if (existingItemIndex !== -1) {

                const newCart = [...prevCart];
                newCart[existingItemIndex] = {
                    ...newCart[existingItemIndex],
                    count: newCart[existingItemIndex].count + count
                }

                return newCart

            } else {

                return [...prevCart, {...item, count}]
                
            }
            
        })
    }

    function calculateCartQuantity(cart) {

    let totalQuantity = 0;

    for (let item of cart) {

        totalQuantity += item['count'];
    
    };

        return totalQuantity
    
    }
    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            calculateCartQuantity
          }}>
            {children}
        </CartContext.Provider>
    );
    
}

export function useCart() {

    return useContext(CartContext);

} 