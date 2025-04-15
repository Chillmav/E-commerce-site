import { useCart } from "../CartContext"
import './../../component-styles/Cart-components/CartInfo.css'
export default function CartInfo() {
    const { cart, calculateCartQuantity } = useCart();

    if (!cart.length) {
        return (
            <div
            className="cart-info"
            >
                You Cart is empty!

            </div>
        )
    }
    return (
        <>  
            <div
            className="cart-info"
            >
                You have {calculateCartQuantity(cart)} items in your cart!
                
            </div>
        </>
    )
    
}