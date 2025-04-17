import { useCart } from "../CartContext";
import CartProduct from "./CartProduct";
import './../../component-styles/Cart-components/CartProducts.css'
import CartSummarize from "./CartSummarize";
import { useState } from "react";
export default function CartProducts() {

    const { cart } = useCart();
    const [deliveryOptions, setDeliveryOptions] = useState([]);

    if (cart.length) {
        return (
            <div
            className="cart-flex-main"
            >   
                <p
                className="review-order"
                >Review your Order</p>
                <div
                className="cart-flex"
                >  
                    {cart.map((item) => (
                        <CartProduct
                        key={item.id}
                        img={item.img}
                        price={item.price}
                        count={item.count}
                        name={item.name}
                        id={item.id}
                        deliveryOptions={deliveryOptions}
                        setDeliveryOptions={setDeliveryOptions}
                        />
                    ))}

                </div>
                <div>
                <CartSummarize
                 />
                </div>
            </div>
        )
    }

    
}