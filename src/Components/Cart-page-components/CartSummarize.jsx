import './../../component-styles/Cart-components/CartSummarize.css'
import { useCart } from '../CartContext'
import { priceFromCents } from '../../utils/price';
export default function CartSummarize() {

    const { cart, calculateCartQuantity, calculateCartValue } = useCart();

    const shipping = 1499;
    const cartValue = calculateCartValue(cart);
    const tax = (cartValue + shipping) * 0.1
    if (cart.length) {
        return (
        <div
        className='right-cart-section'
        >
            <div
            className="cart-summarize-flex"
            >
                <p
                className='order-summary-text'
                >Order Summary:</p>

                <div
                className='row-flex'
                >
                    <p>Items({calculateCartQuantity(cart)}):</p>
                    <p>{priceFromCents(cartValue)}</p>
                </div>
                <div
                className='row-flex'
                >
                    <p>Shipping:</p>
                    <p>{priceFromCents(shipping)}</p> 
                </div>
                <div
                className='row-flex'
                >
                    <p>Total before tax:</p>
                    <p>{priceFromCents(cartValue + shipping)}</p>
                </div>
                <div
                className='row-flex'
                >
                    <p>Estimated tax (10%): </p>
                    <p>{priceFromCents(tax)}</p>

                </div>
                <div
                className='order-total-flex'
                >
                    <p>Order Total: </p>
                    <p>{priceFromCents(cartValue + shipping + tax)}</p>
                </div>
                <button
                className='place-order-button'
                >Place your order</button>
            </div>
        </div>
        )
    }

}