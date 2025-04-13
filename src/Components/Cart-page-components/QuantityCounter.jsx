import { useCart } from "../CartContext"
import './../../component-styles/Cart-components/QuantityCounter.css'
import { useRef } from "react";
export default function QuantityCounter({ id, count }) {
    const { cart, addToCart, changeItemQuantity } = useCart();
    const myRef = useRef(null);

    function cleanInput() {
        myRef.current.value = null
    }
    return (
        <div
        className="counter-flex"
        >
            <button
            className="counter-button"
            onClick={() => {
                changeItemQuantity(id, Number(myRef.current.value), false)
                cleanInput()
            }}
            >
                -
            </button>

            <input className="counter" placeholder={count} size={2} ref={myRef}/>
            
            <button
            className="counter-button"
            onClick={() => {
                changeItemQuantity(id, Number(myRef.current.value), true)
                cleanInput();
            }}
            >
                +
            </button>

        </div>
    )
}