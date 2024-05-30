import React, {useState} from 'react';

const ProductCard = ({ product, cart, addToCart, adjustQuantity }) => {
    const [error, setError] = useState('');
    const imagePath = `https://mystoreapp-j5tf.onrender.com/images/${product.image}`;
    const cartItem = cart.find(item => item._id === product._id);


    const handleAdjustQuantity = (productId, change) => {
        if (cartItem) {
            const newQuantity = cartItem.quantity + change;
            if (newQuantity > product.quantity) {
                setError(`Only ${product.quantity} units of ${product.name} available.`);
                return;
             }  
            else {
                setError('');
                adjustQuantity(productId, change);
            }
        } 
        else if (change > 0 && change <= product.quantity) {
            setError('');
            adjustQuantity(productId, change);
        } 
        else {
            setError(`Only ${product.quantity} units of ${product.name} available.`);
        }
    };




    return (
        <div className="card ml-5 p-2 mb-3" style={{ width: '18rem', height:'min-content', boxShadow: '1px 2px 9px #d3d3d3', textAlign:"center"}}>
            <div style={{boxShadow:"1px 2px 9px #d3d3d3", backgroundColor:"#d3d3d3"}}>
            <h5 className="card-title mt-1 pl-1">{product.name}</h5>
            <img src={imagePath} className="card-img-top mb-2 p-2 ml-4" style={{width: '50%', justifyContent: 'center', alignItems: 'center' }} alt={product.name} />
            </div>
            <div className="card-body">
                <p className="card-text">Color: {product.color}</p> 
                <p className="card-text">Type: {product.type}</p>
                <p className="card-text">Price: Rs.{product.price}</p>
                {cartItem ? (
                    <div>
                        <button className="btn btn-outline-secondary btn-sm" style={{padding:'4px'}} onClick={() => handleAdjustQuantity(product._id, -1)}><strong>-</strong></button>
                        <span className="mx-2">{cartItem.quantity}</span>
                        <button className="btn btn-outline-secondary btn-sm" style={{padding:'3.2px'}} onClick={() => handleAdjustQuantity(product._id, 1)}><strong>+</strong></button>
                    </div>
                ) : (
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                )}
                {error && <p className="text-danger mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default ProductCard;