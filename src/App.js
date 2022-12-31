import './App.css';

import { Header } from './Containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductListing } from './Containers/ProuctListing';
import { ProductDetails } from './Containers/ProductDetails';

function App() {
  return (
  <div className="App">
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/products/:productsId" element={<ProductDetails />} />
        <Route> 404 Not Found</Route>
      </Routes>
    </Router>
     
  </div>
  );
}

export default App;
