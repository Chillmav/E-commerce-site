import { useCart } from "../CartContext";
import CartProduct from "./CartProduct";
import { priceFromCents } from "../../utils/price";
import './../../component-styles/Cart-components/CartProducts.css'
export default function CartProducts() {
    const { cart } = useCart();
    if (cart.length) {
        return (
            <div
            className="cart-flex"
            >  
                {cart.map((item) => (
                    <CartProduct
                    key={item.id}
                    img={item.img}
                    price={priceFromCents(item.price)}
                    count={item.count}
                    name={item.name}
                    id={item.id}
                     />
                ))}

            </div>  
        )
    }

    
}