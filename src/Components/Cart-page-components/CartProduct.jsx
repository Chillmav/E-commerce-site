import QuantityCounter from "./QuantityCounter"
import './../../component-styles/Cart-components/CartProduct.css'
import { RiDeleteBin6Line } from "react-icons/ri";
export default function CartProduct({ img, price, count, name, id }) {

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
                />
                <div className="bin-pop-up-info">
                    Remove Product from your Cart
                </div>
            </div>
            <div className="img-div">
                <img src= {`./Electronics/${img}`} className="cart-product-img"/>
            </div>
            
            <p className="cart-product-name">{name}</p>
            <QuantityCounter
            id = {id}
            count = {count}
             />
        </div>
    )

}