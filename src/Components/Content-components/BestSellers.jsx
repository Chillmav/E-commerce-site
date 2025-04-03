import '../../component-styles/Content-components/BestSellers.css'
import electronicsItems from '../../../public/Electronics/electronics';

function BestSellers( {selectedCategory} ) {

    return (
        <div
        className="best-sellers-box"
        >
            {electronicsItems.map((item) => (
                <img
                className='electronics-img'
                src={`./${selectedCategory}/${item.img}`}
                key={item}
                >

                </img>
            ))}
        </div>
    );
};

export default BestSellers