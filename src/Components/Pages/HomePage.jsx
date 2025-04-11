import Header from '../Header-components/Header'
import PageContent from '../Home-components/PageContent'
import { useState } from 'react';

function HomePage() {

    const [selectedCategory, setSelectedCategory] = useState('All Categories');

        return (
          <>
            <Header
            selectedCategory = {selectedCategory}
            setSelectedCategory = {setSelectedCategory}
            />
            <PageContent
            selectedCategory = {selectedCategory}
            setSelectedCategory = {setSelectedCategory}
            />
          </>
        )
      }
      
export default HomePage;      
