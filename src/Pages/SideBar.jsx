import Styles from './SideBar.module.css'
// import { FaPizzaSlice } from "react-icons/fa";
// import { RiDrinks2Fill } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import { BsCupHotFill } from "react-icons/bs";
// import { GiSandwich } from "react-icons/gi";
import { createQueryObject } from '../Help/Helper';
import img2 from '../assets/cold-coffee-icon.svg'
import img3 from '../assets/Cold-bar-icon.svg'
import img4 from '../assets/shake-and glasse-icon.svg'
import img5 from '../assets/Hot-bar-icon.svg'
import img6 from '../assets/shake-and glasse-icon.svg'
import img7 from '../assets/Salad-and-Side-icon.svg'
import img8 from '../assets/Desert-and-cake-icon.svg'
import img9 from '../assets/Breakfast-icon.svg'
import img10 from '../assets/Tea-main-icon.svg'





function SideBar({ query, setQuery }) {
    const categoryHandler = (category) => {
        setQuery((query) => createQueryObject(query, { category }));
    };
    return (
        <div className={Styles.sidebar}>
            <Swiper
                navigation={false} modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={4}
            // onSlideChange={() => console.log('slide change')}
            >
                    {/* <SwiperSlide className={Styles.myswiper}>
                        <div className={Styles.mynav}>
                            <li className={query.category === "همه ی موار " ? Styles.selected : null} onClick={categoryHandler}>همه ی موارد</li>
                        </div>
                    </SwiperSlide> */}
                <SwiperSlide className={Styles.myswiper}  onClick={() => categoryHandler("قهوه گرم")}>
                    <div className={Styles.mynav}
                    >
                        <img src={img2} />
                        <li className={query.category === "قهوه گرم" ? Styles.selected : null}>قهوه گرم</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Styles.myswiper}>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <img src={img3} />

                        <li className={query.category === "پیتزا" ? Styles.selected : null}>
                            پیتزا</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Styles.myswiper}>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <img src={img4} />

                        <li className={query.category === "پاستا" ? Styles.selected : null}>
                            پاستا</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Styles.myswiper}>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <img src={img5} />

                        <li className={query.category === "" ? Styles.selected : null}>
                            women's </li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Styles.myswiper}>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <img src={img6} />

                        <li className={query.category === "" ? Styles.selected : null}>
                            women's </li>
                    </div>
                </SwiperSlide><SwiperSlide className={Styles.myswiper}>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <img src={img7} />

                        <li className={query.category === "" ? Styles.selected : null}>women's</li>
                    </div>
                </SwiperSlide><SwiperSlide className={Styles.myswiper}>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <img src={img8} />

                        <li className={query.category === "" ? Styles.selected : null}>women's</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Styles.myswiper}>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <img src={img9} />

                        <li className={query.category === "قهوه گرم" ? Styles.selected : null}>women's</li>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default SideBar;
