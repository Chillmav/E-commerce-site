import '../../component-styles/Content-components/PageContent.css'
import AdvertComponent from './AdvertComponent'
import BestSellers from './BestSellers'
import ProductsGrid from './ProductsGrid'

function PageContent( {selectedCategory} ) {

    return (
            <div className='page-content'>
                <AdvertComponent 
                />
                <BestSellers
                selectedCategory = {selectedCategory}
                 />
                <ProductsGrid
                selectedCategory = {selectedCategory}
                 />
            </div>
        )

}

export default PageContent



















