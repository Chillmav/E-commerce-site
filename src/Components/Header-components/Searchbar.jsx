import '../../component-styles/Header-components/Searchbar.css'
import { Search } from "lucide-react";
import CategoriesInput from './CategoriesInput';

function Searchbar( {selectedCategory, setSelectedCategory} ) {
    return(
        <div
        className="search-bar"
        >
            
           <CategoriesInput
           selectedCategory={selectedCategory}
           setSelectedCategory={setSelectedCategory}
            />

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