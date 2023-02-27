import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
const Products = React.lazy(()=> import('./Components/Products'))
const NotFound = React.lazy(()=> import('./Components/NotFound'))
const NavbarComponent = React.lazy(()=> import('./Components/Navbar'))
const ProductDetails = React.lazy(()=> import('./Components/ProductDetails'))

function App() {
  return (
    <>
    <Suspense fallback={<p>Chargement ...</p>}>
    <NavbarComponent/>
    <Routes>
    <Route path='/products'>
      <Route index element={<Products />}/>
      <Route path=':name' element={<ProductDetails />}/>
    </Route>
      
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Suspense>
   </>
  );
}

export default App;
