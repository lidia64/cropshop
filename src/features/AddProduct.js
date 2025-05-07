import React, { useState } from 'react';
import { fetchImages } from '../utils/googleImagesAPI';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [imageSearchTerm, setImageSearchTerm] = useState('');
    const [imageResults, setImageResults] = useState([]);

    const handleImageSearch = async () => {
        const images = await fetchImages(imageSearchTerm);
        setImageResults(images);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add product to the database or state
        console.log({ productName, productDescription, productImage });
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input 
                        type="text" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Product Description:</label>
                    <textarea 
                        value={productDescription} 
                        onChange={(e) => setProductDescription(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Search for Product Image:</label>
                    <input 
                        type="text" 
                        value={imageSearchTerm} 
                        onChange={(e) => setImageSearchTerm(e.target.value)} 
                    />
                    <button type="button" onClick={handleImageSearch}>Search</button>
                </div>
                {imageResults.length > 0 && (
                    <div>
                        <h3>Image Results:</h3>
                        <ul>
                            {imageResults.map((image, index) => (
                                <li key={index}>
                                    <img 
                                        src={image} 
                                        alt={`Search result ${index}`} 
                                        onClick={() => setProductImage(image)} 
                                        style={{ cursor: 'pointer', width: '100px' }} 
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div>
                    <label>Selected Image:</label>
                    {productImage && <img src={productImage} alt="Selected" style={{ width: '100px' }} />}
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;