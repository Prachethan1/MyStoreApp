import React, {useState} from 'react';

const ShoppingCart = ({ cart, products, removeFromCart, adjustQuantity }) => {


    const [error, setError] = useState('');

    const handleAdjustQuantity = (item, change) => {
        const product = products.find(product => product._id === item._id);
        if (item.quantity > product.quantity+1) {
            setError(`${item.name} out of stock`);
            return;
        } 
        else {
            setError('');
            adjustQuantity(item._id, change);
        }
    };



    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <img src={`https://mystoreapp-j5tf.onrender.com/images/${item.image}`} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                                <div>
                                    <p><strong>{item.name}</strong></p>
                                    <p>Price: Rs.{item.price}</p>
                                    <p>
                                        <span>Quantity: </span>
                                        <button className="btn btn-outline-secondary btn-sm" style={{padding:'4px'}}   onClick={() => handleAdjustQuantity(item, -1)}><strong>-</strong></button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button  className="btn btn-outline-secondary btn-sm" style={{padding:'3.2px'}} onClick={() => handleAdjustQuantity(item, 1)}><strong>+</strong></button>
                                    </p>
                                    
                                </div>
                            </div>
                            <button className="btn btn-secondary" onClick={() => removeFromCart(item)}>Delete</button>
                            
                        </div>
                    ))}
                    <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                        Total Amount: Rs.{totalAmount}
                    </div>
                    {error && <p className="text-danger mt-2">{error}</p>}
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
