import './../../component-styles/Cart-components/DeliveryOption.css'
import { priceFromCents } from '../../utils/price';
export default function DeliveryOption({ date, cost, productId }) {

    let shippingCostInfo = ''
    if (!cost) {
        shippingCostInfo = 'Free Shipping'
    } else {
        shippingCostInfo = `${priceFromCents(cost)} - Shipping`
    }
    return (
        
        <div
        className='delivery-option'
        >
                <input
                type='radio'
                size='30px'
                style={{cursor: 'pointer'}}
                >
                </input>

                <div>

                    <p
                    className="date"
                    >
                        {date}
                    </p>

                    <p
                    className="shipping-price"
                    >
                        {shippingCostInfo}
                    </p>

                </div>


        </div>
    );
    

}