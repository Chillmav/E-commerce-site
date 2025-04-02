import '../../component-styles/Content-components/AdvertComponent.css'
import { SlArrowLeft, SlArrowRight} from "react-icons/sl";
import { useState, useRef } from 'react';

function AdvertComponent() {

    const adverts = ['./ad1.jpg', './ad2.jpg', './ad3.jpg'];

    const [index, setIndex] = useState(0);

    const myRef = useRef(null)

    function swapAdvertRight() {
        if (index < adverts.length - 1) {

            setIndex(index + 1);

        }   else {

            setIndex(0);

        };
        
    };

    function swapAdvertLeft() {

        if (index > 0) {

            setIndex(index - 1);
        };
    };

    return (
        <div
           className="advert-flex">
            <a
            className='go-to-next-advert'
            onClick={swapAdvertRight}
            >
                <SlArrowRight
                size={100}
                />
                </a>

            <img src={adverts[index]}
            ref={myRef}>
            </img>

            <a
            className='go-to-previous-advert'
            onClick={swapAdvertLeft}
            >
                <SlArrowLeft
                size={100}
                />
                </a>
        </div>
        
    )

};

export default AdvertComponent;