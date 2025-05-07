import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import AddProduct from './features/AddProduct';
import ProductList from './features/ProductList';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/products" component={ProductList} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;