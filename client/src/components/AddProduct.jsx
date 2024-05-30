import React, {useState} from 'react'

function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        color: '',
        type: '',
        gender: '',
        price: '',
        quantity: '',
        image: '',
    });

    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    const handleSubmit = (e)=>{
        e.preventDefault();

        const apiUrl = 'http://localhost:5000/products/add-product';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data)=>{
            console.log('Data posted successfully:', data)
            setFormData({
                name: '',
                color: '',
                type: '',
                gender: '',
                price: '',
                quantity: '',
                image: '',
            });
        })
        .catch((error)=>{
                console.log("Error posting data:", error);
            });
    };


  return (
    <div className='container mt-7'>
      <h2 className='mb-4'>Products Details</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className="form-label pl-2">Name:</label>
            <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='ml-5 form-control'
            />
        </div>
        <div className='mb-3'>
        <label className="form-label pl-2">Color:</label>
            <input 
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className='ml-5 form-control'
            />
        </div>
        <div className='mb-3'>
        <label className="form-label pl-2">Type:</label>
            <input 
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className='ml-5 form-control'
            />
        </div>
        <div className='mb-3'>
        <label className="form-label pl-2 ">Gender:</label>
        <select className='ml-5 form-control' name="gender" value={formData.gender} onChange={handleChange}>
            <option>Select your gender</option>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
        </select>

        </div>
        <div className='mb-3'>
        <label className="form-label pl-2">Price:</label>
            <input 
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className='ml-5 form-control'
            />
        </div>
        <div className='mb-3'>
        <label className="form-label pl-2">Quantity:</label>
            <input 
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className='ml-5 form-control'
            />
        </div>
        <div className='mb-3'>
        <label className="form-label pl-2">Image:</label>
            <input 
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className='ml-5 form-control'
            />
        </div>

        <input type="submit" className="btn btn-primary mt-3"/>

      </form>
    </div>
  )
}

export default AddProduct
