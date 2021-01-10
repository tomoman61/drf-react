import React, { useState } from 'react';

const Basic1 = ( props ) => {
    const [product, setProducts] = useState({
        name: '',
        price: null,
    });

    return (
        <>
            <form>
                <input type='text' value={ product.name }
                       onChange={ e => setProducts({ ...product, name: e.target.value })} />
                <input type='number' value={ product.price }
                       onChange={ e => setProducts({ ...product, price: e.target.value })} />
            </form>
            <p>name: { product.name }</p>
            <p>price: { product.price }</p>
        </>
    )
}

export default Basic1
