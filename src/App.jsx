import './App.css'
import Header from './Components/Header-components/Header'
import PageContent from './Components/Content-components/PageContent'
import { useState } from 'react';
function App() {

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

export default App
