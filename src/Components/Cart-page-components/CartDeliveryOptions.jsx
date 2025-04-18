import './../../component-styles/Cart-components/CartDeliveryOptions.css'
import DeliveryOption from './DeliveryOption';
import deliveryDate from './../../utils/deliveryDate.js'
import { useState, useEffect, useRef } from 'react';
import deliveryDates from './../../utils/deliveryDate.js';
export default function CartDeliveryOptions({ setDeliveryCost }) {

    const [deliveryOption, setDeliveryOption] = useState(1);
    const previousIdRef = useRef(deliveryOption);

    useEffect(() =>

        {
            const previousId = previousIdRef.current;
            if (previousId !== deliveryOption) {
            const prevCost = deliveryDates[previousId - 1].shippingCost;
            const newCost = deliveryDates[deliveryOption - 1].shippingCost;
            setDeliveryCost(prev => prev - prevCost + newCost);
            previousIdRef.current = deliveryOption; // Update ref after cost is set
            }
        },

    [deliveryOption, setDeliveryCost])

    return (
        <div
        className='delivery-options-flex'
        >
            <p
            className='choose-options-text'
            >Choose a delivery options: </p>

            {deliveryDate.map((option) => (
                <DeliveryOption
                    date={option.date}
                    cost={option.shippingCost}
                    key={option.id}
                    id={option.id}
                    selectedOption={deliveryOption}
                    onSelect={setDeliveryOption}
                 />
            )
                
            )}

        </div>
    );

}