import './../../component-styles/Cart-components/CartDeliveryOptions.css'
import DeliveryOption from './DeliveryOption';
import deliveryDate from './../../utils/deliveryDate.js'

export default function CartDeliveryOptions({ productId }) {

    return (
        <div
        className='delivery-options-flex'
        >
            <p
            className='choose-options-text'
            >Choose a delivery options: </p>

            {deliveryDate.map((option) => (
                <DeliveryOption
                    productId={productId}
                    date={option.date}
                    cost={option.shippingCost}
                    key={option.id}
                 />
            )
                
            )}

        </div>
    );

}