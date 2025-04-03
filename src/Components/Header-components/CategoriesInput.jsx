import '../../component-styles/Header-components/CategoriesInput.css'
import { SlArrowDown } from "react-icons/sl"
import { useState } from 'react'

function CategoriesInput( {selectedCategory, setSelectedCategory} ) {

    const Categories = ['All Categories', 'Electronics', 'Clothing', 'Books', 'Home', 'Beauty', 'Sports', 'Toys', 'Automotive', 'Jewelry'];
    const [categories, setCategories] = useState(false);

    function handleCategoryClick(category) {
        const categoryText = category.target.innerText;
        setSelectedCategory(categoryText);
    }
    function displayCategories() {
        setCategories(!categories);
    }
    return (
        <>
            <button
            className='categories-input'
            onClick={displayCategories}
            >
            {selectedCategory}
                <SlArrowDown
                size={12}
                color='black'
                />
                <div
                className='categories-list'
                style={{ display: categories ? 'block' : 'none' }}
                >
                    {Categories.map((category) => (
                        <div
                        className='category'
                        onClick={handleCategoryClick}
                        key={category}
                        >{category}
                        </div>
                    ))}
                </div>
            </button>
        </>
    );
};

export default CategoriesInput;