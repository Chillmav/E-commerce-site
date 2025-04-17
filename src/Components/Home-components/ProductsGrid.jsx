import '../../component-styles/Content-components/ProductsGrid.css'
import ProductContainer from './ProductContainer.jsx';
import items from '../../../public/Items/items.jsx'

function ProductsGrid( {selectedCategory} ) {
    return (
        <div
        className="products-grid"
        >
            {items[selectedCategory].map((item) => (
                <ProductContainer
                item = {item}
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