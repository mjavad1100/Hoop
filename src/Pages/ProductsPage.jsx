import { useEffect, useState } from 'react';
// import { ImSearch } from 'react-icons/im';
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
import { FaPizzaSlice } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
// import 'bootstrap/dist/css/bootstrap.min.css';






// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Container } from 'react-bootstrap';

// import Slider from "../Components/Slider"
function ProductsPage() {
    const products = useProducts();
    const [displayed, setDisplayed] = useState([]);
    // const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});

    useEffect(() => {
        setDisplayed(products);
    }, [products]);
    useEffect(() => {
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
    }, [query]);
    // const searchHandler = () => {
    //     setQuery((query) => ({ ...query, search }));
    // };
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();
        if (tagName !== "LI") return;
        setQuery((query) => ({ ...query, category }));
    };
    return (
        <>
            <div style={{backgroundColor:"white", display:"flex",flexDirection:"column", alignItems:"center"}}>
                <img src={img1} className={Styles.image} style={{width:"300px" ,height:"200px"}}/>
                {/* <div style={{flexDirection:"row", display:"flex",padding:"20px"}}>
                <input style={{backgroundColor:"lightblue", borderRadius:"10px",padding:"4px", border:"1px solid darkcyan"}} type="text" placeholder='Search' value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
                <button onClick={searchHandler} style={{borderRadius:"20px", border:"2px solid darkcyan", color:"darkcyan",marginLeft:"2px"}}><ImSearch fontSize={"1.5rem"} /></button>
                </div> */}
            </div>
            <div className={Styles.container}>
                <div className={Styles.sidebar}>
                    <Swiper
                        navigation={true} modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)

                        }

                    >
                
                        <SwiperSlide >
                            <div className={Styles.mynav}>
                            <li onClick={categoryHandler}>همه ی موارد</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav}
                                onClick={categoryHandler}>

                                <li> <BsCupHotFill style={{ fontSize: "2.5rem", padding: "10px" }} />قهوه گرم</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><FaPizzaSlice style={{fontSize:"2.5rem", padding: "10px"}} />
                                پیتزا</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><GiSandwich style={{fontSize:"2.5rem", padding: "10px"}} />
                                Men's clothing</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><FaPizzaSlice style={{fontSize:"2.5rem", padding: "10px"}} />
                                women's clothing</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><RiDrinks2Fill style={{fontSize:"2.5rem", padding: "10px"}} />
                                women's clothing</li>
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
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li>women's clothing</li>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
