import '../../component-styles/Header-components/Searchbar.css'
import { Search } from "lucide-react";
import CategoriesInput from './CategoriesInput';

function Searchbar() {
    return(
        <div
        className="search-bar"
        >
            
           <CategoriesInput />

            <input
            placeholder="What you need?"
            size='50'
            className="search-input"
             />
            <button
            className='search-icon-box'
            >
                <Search 
                size={24}
                color='white'
                />
            </button>
        </div>
    );
};

export default Searchbar;