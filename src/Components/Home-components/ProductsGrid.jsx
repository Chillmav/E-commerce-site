import '../../component-styles/Content-components/ProductsGrid.css'
import ProductContainer from './ProductContainer.jsx';
import items from '../../../public/Electronics/electronics.jsx'

function ProductsGrid( {selectedCategory} ) {
    return (
        <div
        className="products-grid"
        >
            {items[`Electronics`].map((item) => (
                <ProductContainer
                itemImg = {item.img}
                itemName = {item.name}
                itemStars = {item.stars}
                itemRatingsNumber = {item.ratingsNumber}
                itemPrice = {item.price}
                itemBestseller = {item.bestseller}
                key={item.id}
                />
            ))}
            
        </div>
    );
};

export default ProductsGrid;