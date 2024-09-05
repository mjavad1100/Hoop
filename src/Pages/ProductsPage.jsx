import { useEffect, useState } from 'react';
// import { ImSearch } from 'react-icons/im';
import { useProducts } from '../Context/ProductContext';
import { searchProducts, filterProducts, createQueryObject } from '../Help/Helper';
import Card from '../Components/Card';
import Loader from '../Components/Loader';
import Styles from './ProductsPage.module.css';
// import { FaListUl } from 'react-icons/fa';
import { BsCupHotFill } from "react-icons/bs";
import { GiSandwich } from "react-icons/gi";
import { GiFrenchFries } from "react-icons/gi";
import img1 from '../assets/hope-03.svg';
import img2 from '../assets/hope-02.svg';

import { FaPizzaSlice } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ImSearch } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';





function ProductsPage() {
    const products = useProducts();
    const [displayed, setDisplayed] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});
    const [searchParamas, setSearchParams]  = useSearchParams();

    useEffect(() => {
        setDisplayed(products);
    }, [products]);
    useEffect(() => {
        setSearchParams(query);
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
    }, [query]);

    const searchHandler = () => {
        setQuery((query) => createQueryObject(query, {search}));
    };
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText;
        if (tagName !== "LI") return;
        setQuery((query) => createQueryObject(query, {category}));
    };
    return (
        <>
            <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", marginTop:"15px"}}>
                <img src={img1} className={Styles.image} style={{ width: "180px", height: "200px",marginLeft:"auto" }} />
                <div style={{width:"2px", height:"100px", marginTop:"auto", background:"black",marginBottom:"auto"}}></div>
                <img src={img2} className={Styles.image} style={{ width: "180px", height: "200px", marginRight:"auto" }} />

               
            </div>
            <div className={Styles.container}>
                <div className={Styles.sidebar}>
                    <Swiper
                        navigation={true} modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={3.8}
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
                                <li><FaPizzaSlice style={{ fontSize: "2.5rem", padding: "10px" }} />
                                    پیتزا</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><GiSandwich style={{ fontSize: "2.5rem", padding: "10px" }} />
                                    پاستا</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><FaPizzaSlice style={{ fontSize: "2.5rem", padding: "10px" }} />
                                    women's clothing</li>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={Styles.mynav} onClick={categoryHandler}>
                                <li><RiDrinks2Fill style={{ fontSize: "2.5rem", padding: "10px" }} />
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
                </div>
                <div> 
                <div className={Styles.mysearch}>
                <input type="text" placeholder='Search' value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
                <button onClick={searchHandler}><ImSearch fontSize={"1.5rem"} style={{padding:"3px"}} /></button>
                </div>
                <div className={Styles.products}>
               
                    {!displayed.length && <Loader />}
                    {displayed.map((p) => <Card key={p.id} data={p} />)}</div>
                </div>

            </div>
        </>


    );
}

export default ProductsPage;
