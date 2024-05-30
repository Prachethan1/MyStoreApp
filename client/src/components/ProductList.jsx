import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Filter from './Filter';

const ProductList = ({ addToCart, cart, adjustQuantity }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        gender: [],
        color: [],
        priceRange: [],
        type: []
    });







    useEffect(() => {
        fetch('http://localhost:5000/products/allProducts')
            .then((response) => response.json())
            .then((data) => {setProducts(data)
                setFilteredProducts(data)
    })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);


    



    const applyFilters = useCallback(() => {
        let filtered = [...products];

        if (filters.gender.length > 0) {
            filtered = filtered.filter(product => filters.gender.includes(product.gender.toLowerCase()));
        }

        if (filters.color.length > 0) {
            filtered = filtered.filter(product => filters.color.includes(product.color.toLowerCase()));
        }

        if (filters.priceRange.length > 0) {
            filtered = filtered.filter(product => {
                return filters.priceRange.some(range => {
                    if (range === '0-250') return product.price >= 0 && product.price <= 250;
                    if (range === '251-450') return product.price > 250 && product.price <= 450;
                    if (range === '450+') return product.price > 450;
                    return false;
                });
            });
        }

        if (filters.type.length > 0) {
            filtered = filtered.filter(product => filters.type.includes(product.type.toLowerCase()));
        }

        setFilteredProducts(filtered);
    }, [filters, products]);


    useEffect(() => {
        applyFilters();
    }, [filters, products, applyFilters]);

    

    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() === '') {
            setFilteredProducts(products);
            applyFilters();
        }
        else{
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(lowercasedTerm) ||
            product.color.toLowerCase().includes(lowercasedTerm) ||
            product.type.toLowerCase().includes(lowercasedTerm)
        );
        setFilteredProducts(filtered);
    }
    };

    return (
        <>

        <div style={{width:"400px", marginLeft:"560px"}}>
            <SearchBar onSearch={handleSearch}/>
        </div>

        <div style={{ display: 'flex'}}>



            <div style={{ height:'min-content',padding:'40px', boxShadow: '1px 2px 9px #d3d3d3',width: 'min-content',}}>
                <Filter filters={filters} setFilters={setFilters} />
            </div>

            


            <div className="d-flex flex-wrap" style={{justifyContent:"center"}}>
                {filteredProducts.map((product) => (
                    <ProductCard key={product._id}
                                product={product}
                                cart={cart} 
                                addToCart={addToCart}
                                adjustQuantity={adjustQuantity}
                                style={{ margin: '10px' }}
                    />
                ))}
            </div>


        </div>
        </>
    );
};

export default ProductList;