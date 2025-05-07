import React from 'react';
import ProductList from '../features/ProductList';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Farmers E-Commerce Platform</h1>
            <p>Discover fresh products directly from local farmers.</p>
            <h2>Featured Products</h2>
            <ProductList />
        </div>
    );
};

export default Home;