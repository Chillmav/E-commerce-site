import QuantityCounter from "./QuantityCounter"
import './../../component-styles/Cart-components/CartProduct.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../CartContext";
import { priceFromCents } from "../../utils/price";
import CartDeliveryOptions from "./CartDeliveryOptions";
export default function CartProduct({ img, price, count, name, id, deliveryCost, setDeliveryCost }) {

    const { removeProduct } = useCart();

    return (
        <div
        className="cart-item-flex"
        >
            <div
            className="bin-icon"
            >
                <RiDeleteBin6Line
                size={40}
                color="rgb(214, 82, 82)"
                onClick={() => {
                    removeProduct(id);
                }}
                />
                <div className="bin-pop-up-info">
                    Remove Product from your Cart
                </div>
            </div>
            <div className="img-div">
                <img src= {`./Items/${img}`} className="cart-product-img"/>
            </div>
            <div
            className="product-info"
            >
                <p className="cart-product-name">

                    {name}

                </p>
                <QuantityCounter
                    id = {id}
                    count = {count}
                    />
                <p
                className="cart-product-price">

                    {priceFromCents(price * count)} 

                </p>
            </div>


            <CartDeliveryOptions
            deliveryCost = {deliveryCost}
            setDeliveryCost = {setDeliveryCost}
            />


        </div>
    )

}