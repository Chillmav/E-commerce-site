import Header from '../Header-components/Header'
import { SiWoocommerce } from "react-icons/si";
import CartInfo from '../Cart-page-components/CartInfo';
import { CartProvider } from '../CartContext';
import RightSection from '../Header-components/RightSection';
import CartProducts from '../Cart-page-components/CartProducts';
export default function CartPage() {
    return (
        <CartProvider>
        
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
                <RightSection />
            </div>

            <CartInfo />
            <CartProducts />
        </CartProvider>
    );
};