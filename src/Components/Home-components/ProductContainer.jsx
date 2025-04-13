import '../../component-styles/Content-components/ProductContainer.css'
import { priceFromCents } from '../../utils/price';
import { useRef, useState } from 'react';
import { useCart } from '../CartContext';

function ProductContainer({ itemImg, itemName, itemStars, 
    itemRatingsNumber, itemPrice, itemBestseller, item}) {
    
    const myRef = useRef(null);
    const [ addedToCart, setAddedToCart ] = useState(false);
    const { addToCart } = useCart();
    let timeoutRef = useRef(null);

    function addedToCartText() {
        setAddedToCart(true)

        if (addedToCart) {

            clearTimeout(timeoutRef.current);

        }

        timeoutRef.current = setTimeout(() => {
            setAddedToCart(false);
        }, 2000)

    }

    return (
        <div
        className="product-container"
        >
            <p
            className='bestseller-text'
            style={{display: itemBestseller ? 'block' : 'none'}}
            >bestseller</p>
            <img
            className='product-img'
            src={`./Electronics/${itemImg}`}
            />
            <div
            className='item-info'
            >
                <div
                className='item-name'
                >{itemName}</div>
                <div
                className='stars'
                >
                    <img
                    className='stars-img'
                    src= {`./ratings/rating-${itemStars}.png`}
                     />
                    <div
                    className='product-rating-count'
                    >
                        {itemRatingsNumber}
                    </div>
                </div>
                <div
                    className='price-text'
                    >
                        {priceFromCents(itemPrice)}
                </div>
                <select
                className='select-bar'
                ref={myRef}
                >
                    <option value='1' className='option'>1</option>    
                    <option value='2' className='option'>2</option>
                    <option value='3' className='option'>3</option>
                    <option value='4' className='option'>4</option>
                    <option value='5' className='option'>5</option>

                </select>
                <div
                className='added-to-div'
                >
                <p
                className='added-to-cart-text'
                style={{display: addedToCart ? 'block' : 'none'}}
                >Added to Cart</p>
                <button
                className='add-to-cart-button'
                onClick={() => {

                    addToCart(item, myRef);
                    addedToCartText();
                }}
                >
                    Add to cart
                </button>
                </div>
            </div>
        </div>
    );
}


export default ProductContainer;
