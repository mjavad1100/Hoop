import Styles from './SideBar.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { createQueryObject } from '../Help/Helper';
import img1 from '../assets/icons/Asset 1.svg';
import img2 from '../assets/icons/Asset 2.svg'
import img3 from '../assets/icons/Asset 3.svg';
// import img5 from '../assets/Hot-bar-icon.svg';
import img5 from '../assets/icons/Asset 5.svg';
import img6 from '../assets/icons/Asset 6.svg';
import img7 from '../assets/icons/Asset 7.svg';
import img8 from '../assets/icons/Asset 8.svg';
import img10 from '../assets/coffee.png';
import img11 from '../assets/0.png';
import img13 from '../assets/icons 2/burger.png';
import img14 from '../assets/icons 2/english-breakfast.png';
import img15 from '../assets/icons 2/fries.png';
import img16 from '../assets/icons 2/pasta.png';
import img17 from '../assets/icons 2/panini.png';
import img18 from '../assets/icons 2/salad.png';
import img19 from '../assets/icons 2/steak.png';
import img20 from '../assets/icons 2/bibimbap.png';




function SideBar({ query, setQuery }) {
    const categoryHandler = (category) => {
        setQuery((query) => createQueryObject(query, { category }));
    };

    const categories = [
        { name: "همه‌ی موارد", img: img11 },
        { name: "گرم اسپرسو", img: img6 },
        { name: "سرد  اسپرسو", img: img1 },
        { name: "بار گرم", img: img10 },
        { name: "چای بار", img: img7 },
        { name: "ماچا بار", img: img5 },
        { name: "ماکتیل", img: img8 },
        { name: "اسموتی", img: img3},
        { name: "شیک", img: img2 },
        { name: "صبحانه", img:img14 },
        { name: "برگر", img: img13 },
        { name: "پیش غدا", img: img15 },
        { name: "غدای اصلی", img: img20 },
        { name: "ساندویچ", img: img17 },
        { name: "پاستا", img: img16 },
    ];

    return (
        <div className={Styles.sidebar}>
            
            <Swiper
                navigation={false}
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView={3}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className={Styles.myswiper} onClick={() => categoryHandler(category.name)}>
                        <div className={Styles.mynav}>
                            {category.img && <img src={category.img} style={{ width: "50px", height: "50px" }} />}
                            <li className={query.category === category.name ? Styles.selected : null}>{category.name}</li>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SideBar;