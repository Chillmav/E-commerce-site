import '../../component-styles/Content-components/BestSellers.css'
import items from '../../../public/Electronics/electronics';

function BestSellers( {selectedCategory} ) {

    return (
        <div
        className="best-sellers-box"
        >
            <p
            className='best-sellers-text'
            >Best sellers {selectedCategory}</p>
            {items['Electronics'].map((item) => { if (item.bestseller) {
                return (
                    <img
                    className='small-img'
                    src={`./${selectedCategory}/${item.img}`}
                    key={item.id}
                    />
                ) 
            } else {
                return null
            }})}
                
        </div>
    );
};

export default BestSellers