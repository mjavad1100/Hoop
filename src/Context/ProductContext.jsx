

import { createContext, useContext, useEffect, useState } from 'react';
import { myproducts } from './myproducts';

const ProductContext = createContext();

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts(myproducts);
            } catch (error) {
                console.error("Failed to fetch products:", error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
}

const useProducts = () => {
    const products = useContext(ProductContext);
    return products;
};
 const useProductDetails =(id) =>{
    const products = useContext(ProductContext);
    const  result = products.find((product) => product.id === id );
    return result;

 }

export default ProductsProvider;
export { useProducts, useProductDetails };
