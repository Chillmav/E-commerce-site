import '../../component-styles/Header-components/Header.css'
import Searchbar from './Searchbar'
import RightSection from './RightSection';
import { SiWoocommerce } from "react-icons/si";
function Header( {selectedCategory, setSelectedCategory} ) {
    return(

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
            <Searchbar
            selectedCategory = {selectedCategory}
            setSelectedCategory = {setSelectedCategory}
             />
            <RightSection />
        </div>
    )

}

export default Header;