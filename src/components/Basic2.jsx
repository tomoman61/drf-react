import React, { useState } from 'react';

const Basic2 = () => {
    const [products, setProducts] = useState([]);
    const newProducts = () => {
        setProducts([...products, {
            id: products.length,
            name: 'tomoman',
        }])
    }

    return (
        <>
            <button onClick={newProducts}>Add New Product</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>id: {product.id} name: { product.name }</li>
                ))}
            </ul>
        </>
    )
}

export default Basic2
