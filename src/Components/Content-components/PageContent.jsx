import '../../component-styles/Content-components/PageContent.css'
import AdvertComponent from './AdvertComponent'
import BestSellers from './BestSellers'

function PageContent( {selectedCategory} ) {

    return (
            <div className='page-content'>
                <AdvertComponent 
                />
                <BestSellers
                selectedCategory = {selectedCategory}
                 />
            </div>
        )

}

        export default PageContent



















