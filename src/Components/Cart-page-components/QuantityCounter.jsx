import { useCart } from "../CartContext"
import './../../component-styles/Cart-components/QuantityCounter.css'
export default function QuantityCounter({ id, count }) {
    const { cart, addToCart } = useCart();

    return (
        <div
        className="counter-flex"
        >
            <button
            className="counter-button"
            >
                -
            </button>

            <input className="counter" placeholder={count} size={2}/>
            
            <button
            className="counter-button"
            >
                +
            </button>

        </div>
    )
}