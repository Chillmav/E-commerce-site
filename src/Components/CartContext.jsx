import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState( JSON.parse(localStorage.getItem('cart')) || []);

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
                localStorage.setItem('cart', JSON.stringify(newCart))
                return newCart

            } else {
                localStorage.setItem('cart', JSON.stringify([...prevCart, {...item, count}]))
                return [...prevCart, {...item, count}]
                
            }
            
        })
    }
    
    function changeItemQuantity(id, count, operation) {

        count = count || 1;

        // adding if operation is equal to true
        if (operation) {
            
            const updatedCart = cart.map(item => {

                if (item.id === id) {
                    return {...item, count: item.count + count}
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            setCart(updatedCart)

            }
         else { // removing if operation is equal to false
            const updatedCart = cart.reduce((acc, item) => {

                if (item.id === id) {
                    if (item.count - count <= 0) {
                        return acc
                    } else {
                        acc.push({...item, count: item.count - count})
                    }
                    
                } else {
                    acc.push(item);
                }
                
                return acc
            }, [])

            localStorage.setItem('cart', JSON.stringify(updatedCart))
            setCart(updatedCart)
        }
    }

    function removeProduct(id) {

        const updatedCart = cart.filter(item => item.id !== id)
        
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))

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
            calculateCartQuantity,
            changeItemQuantity,
            removeProduct
          }}>
            {children}
        </CartContext.Provider>
    );
    
}

export function useCart() {

    return useContext(CartContext);

} 