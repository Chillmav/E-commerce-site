import './../../component-styles/Cart-components/CartDeliveryOptions.css'
import DeliveryOption from './DeliveryOption';
import deliveryDate from './../../utils/deliveryDate.js'
import { useState } from 'react';



export default function CartDeliveryOptions() {

    return (
        <div
        className='delivery-options-flex'
        >
            <p
            className='choose-options-text'
            >Choose a delivery options: </p>
            <DeliveryOption
            date={deliveryDate.tommorow}
            cost={0}
             />
            <DeliveryOption
            date={deliveryDate.day3}
            cost={4.99}
             />
            <DeliveryOption
            date={deliveryDate.day7}
            cost={9.99}
             />

        </div>
    );

}