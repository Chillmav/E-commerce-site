import Header from '../Header-components/Header'
import { SiWoocommerce } from "react-icons/si";

export default function CartPage() {
    return (
        <>
            <div
            className="header-flex"
            >
                <SiWoocommerce
                src='/logo.png'
                className='logo'
                size={100}
                style={ {cursor: 'pointer' } }
                onClick={() => window.location.href = '/'}
                />
            </div>
        </>
    );
};