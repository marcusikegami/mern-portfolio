
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {
  const [categories] = useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div id="top">
      
    <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
    ></Header>
    <main className='container my-5'>
    {!contactSelected ? (
      <>
      <Body currentCategory={currentCategory}>
      </Body>
      </>
    ) : (
      <Contact></Contact>
    )}
    </main>
    

    <Footer />
    </div>
  );
}

export default App;
