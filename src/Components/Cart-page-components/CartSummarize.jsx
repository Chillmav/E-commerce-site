import './../../component-styles/Cart-components/CartSummarize.css'
import { useCart } from '../CartContext'
export default function CartSummarize() {

    const { cart } = useCart();
    if (cart.length) {
        return (
        <div
        className='right-cart-section'
        >  
            <div
            className="cart-info"
            >
                Cart Summarize! 
                
            </div>

            <div
            className="cart-summarize-flex"
            >
                
            </div>
        </div>
        )
    }

}