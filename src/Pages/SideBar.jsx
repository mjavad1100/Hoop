import Styles from './SideBar.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { createQueryObject } from '../Help/Helper';
import img2 from '../assets/american-pizza-1.svg';
import img3 from '../assets/Hot-Drink.svg';
import img4 from '../assets/Hotdog-1.svg';
import img5 from '../assets/Hot-bar-icon.svg';
import img6 from '../assets/Salad-1.svg';
import img7 from '../assets/Fruit-Juice-1.svg';
import img8 from '../assets/Kempir-1.svg';
import img9 from '../assets/Burger.svg';
import img10 from '../assets/steak-1.svg';

function SideBar({ query, setQuery }) {
    const categoryHandler = (category) => {
        setQuery((query) => createQueryObject(query, { category }));
    };

    const categories = [
        { name: "همه‌ی موارد", img: null },
        { name: "بر پایه اسپرسو", img: img2 },
        { name: "بار گرم", img: img3 },
        { name: "چای بار", img: img4 },
        { name: "سرد بر پایه اسپرسو", img: img6 },
        { name: "ماکتیل", img: img7 },
        { name: "اسموتی", img: img8 },
        { name: "شیک ها", img: img9 },
        { name: "ماچا بار", img: img10 },
    ];

    return (
        <div className={Styles.sidebar}>
            <Swiper
                navigation={false}
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={4}
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