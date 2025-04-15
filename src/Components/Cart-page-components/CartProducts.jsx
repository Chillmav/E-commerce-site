import { useCart } from "../CartContext";
import CartProduct from "./CartProduct";
import './../../component-styles/Cart-components/CartProducts.css'
import CartSummarize from "./CartSummarize";
import CartInfo from "./CartInfo";
export default function CartProducts() {
    const { cart } = useCart();
    if (cart.length) {
        return (
            <div
            className="cart-flex-main"
            >   
                <div
                className="cart-flex"
                >  
                    <CartInfo />
                    {cart.map((item) => (
                        <CartProduct
                        key={item.id}
                        img={item.img}
                        price={item.price}
                        count={item.count}
                        name={item.name}
                        id={item.id}
                        />
                    ))}

                </div>
                <CartSummarize />
            </div>
        )
    }

    
}