import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useProducts } from '../Context/ProductContext';
import { searchProducts, filterProducts } from '../Help/Helper';
import Card from '../Components/Card';
import Loader from '../Components/Loader';
import Styles from './ProductsPage.module.css';
// import { FaListUl } from 'react-icons/fa';
import { BsCupHotFill } from "react-icons/bs";
import { GiSandwich } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import img1 from '../assets/logoo.jpg';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

// import Slider from "../Components/Slider"
function ProductsPage() {
    const products = useProducts();
    const [displayed, setDisplayed] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});

    useEffect(() => {
        setDisplayed(products);
    }, [products]);
    useEffect(() => {
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
    }, [query]);
    const searchHandler = () => {
        setQuery((query) => ({ ...query, search }));
    };
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
        if (tagName !== "LI") return;
        setQuery((query) => ({ ...query, category }));
    };
    return (
        <>
            <div style={{backgroundColor:"white", display:"flex",flexDirection:"column", alignItems:"center"}}>
                <img src={img1} style={{width:"250px" ,height:"200px"}}/>
                <input type="text" placeholder='Search' value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
                <div style={{flexDirection:"row", display:"flex"}}>
                <button onClick={searchHandler}><ImSearch /></button>
                </div>
            </div>
            <div className={Styles.container}>
                <div className={Styles.sidebar}>
                    <Swiper
                        navigation={true} modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)

                        }

                    >
                
                        <SwiperSlide >
                            <div className={Styles.mynav}>
                            <li onClick={categoryHandler}>All</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav}
                                onClick={categoryHandler}>

                                <li> <GiFrenchFries style={{ fontSize: "4rem", padding: "10px" }} />Jewelery</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><BsCupHotFill style={{fontSize:"4rem", padding: "10px"}} />
                                electronics</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><GiSandwich style={{fontSize:"4rem", padding: "10px"}} />
                                Men's clothing</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li>women's clothing</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li>women's clothing</li>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li>women's clothing</li>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li>women's clothing</li>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* <ul className={Styles.mylist} onClick={categoryHandler}>
                        <li>All</li>
                        <li>electronics</li>
                        <li>Jewelery</li>
                        <li>Men's clothing</li>
                        <li>women's clothing</li>
                    </ul> */}
                </div>
                <div className={Styles.products}>
                    {!displayed.length && <Loader />}
                    {displayed.map((p) => <Card key={p.id} data={p} />)}</div>

            </div>
        </>


    );
}

export default ProductsPage;
