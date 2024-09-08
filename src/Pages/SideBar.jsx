import Styles from './SideBar.module.css'
import { FaPizzaSlice } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsCupHotFill } from "react-icons/bs";
import { GiSandwich } from "react-icons/gi";
import { createQueryObject } from '../Help/Helper';



function SideBar({ query, setQuery }) {
    const categoryHandler = (event) => {
        const { tagName } = event.target;
        const category = event.target.innerText;
        if (tagName !== "LI") return;
        setQuery((query) => createQueryObject(query, { category }));

    };
    return (
        <div className={Styles.sidebar}>
            <Swiper
                navigation={false} modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={3.4}
            // onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide >
                    <div className={Styles.mynav}>
                        <li className={query.category === "همه ی موار " ? Styles.selected : null}onClick={categoryHandler}>همه ی موارد</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav}
                        onClick={categoryHandler}>

                        <li className={query.category === "قهوه گرم" ? Styles.selected : null}> <BsCupHotFill className={Styles.myicon} />قهوه گرم</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "پیتزا" ? Styles.selected : null}><FaPizzaSlice className={Styles.myicon} />
                            پیتزا</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "پاستا" ? Styles.selected : null}><GiSandwich className={Styles.myicon} />
                            پاستا</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "" ? Styles.selected : null}><FaPizzaSlice className={Styles.myicon} />
                            women's clothing</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "" ? Styles.selected : null}><RiDrinks2Fill style={{ fontSize: "2.3rem", padding: "10px", color: "rgb(46, 46, 46)", }} />
                            women's clothing</li>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "" ? Styles.selected : null}>women's clothing</li>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "" ? Styles.selected : null}>women's clothing</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "قهوه گرم" ? Styles.selected : null}>women's clothing</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "قهوه گرم" ? Styles.selected : null}>women's clothing</li>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={Styles.mynav} onClick={categoryHandler}>
                        <li className={query.category === "قهوه گرم" ? Styles.selected : null}>women's clothing</li>
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
    );
}

export default SideBar;
