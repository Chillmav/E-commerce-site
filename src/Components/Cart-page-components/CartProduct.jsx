import QuantityCounter from "./QuantityCounter"
import './../../component-styles/Cart-components/CartProduct.css'
export default function CartProduct({ img, price, count, name, id }) {

    return (
        <div
        className="cart-item-flex"
        >
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