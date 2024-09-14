import Styles from './ProductsPage.module.css';
import { useEffect, useState } from 'react';
// import { ImSearch } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../Context/ProductContext';
import { searchProducts, filterProducts, getInitialQuery } from '../Help/Helper';
import Card from '../Components/Card';
import Loader from '../Components/Loader';

import img1 from '../assets/hope-03.svg';
import img2 from '../assets/hope-02.svg';

import SearchBox from './SearchBox';
import SideBar from './SideBar';





function ProductsPage() {
    const products = useProducts();
    const [displayed, setDisplayed] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setDisplayed(products);
        setQuery(getInitialQuery(searchParams)); 


    }, [products]);
    useEffect(() => {
        setSearchParams(query);

        setSearch(query.search || "");



        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);

    }, [query]);

   
 
    return (
        <>
            {/* <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginTop: "15px" }}>
                <img src={img1} className={Styles.image} style={{ width: "175px", height: "200px", marginLeft: "auto" }} />
                <div style={{ width: "1.6px", height: "100px", marginTop: "auto", background: "black", marginBottom: "auto" }}></div>
                <img src={img2} className={Styles.image} style={{ width: "175px", height: "200px", marginRight: "auto" }} />
            </div> */}
            

            <div className={Styles.container}>

              <SideBar query={query} setQuery={setQuery} />
                    <div className={Styles.products}>
                        {!displayed.length && <Loader />}
                        {displayed.map((p) => <Card key={p.id} data={p} />)} </div>
                        

            </div>
        </>


    );
}

export default ProductsPage;
