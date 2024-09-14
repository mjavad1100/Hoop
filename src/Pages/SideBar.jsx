import Styles from './SideBar.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { createQueryObject } from '../Help/Helper';
import img2 from '../assets/icons/Asset 1.svg';
import img3 from '../assets/icons/Asset 2.svg'
import img4 from '../assets/icons/Asset 3.svg';
// import img5 from '../assets/Hot-bar-icon.svg';
import img6 from '../assets/icons/Asset 5.svg';
import img7 from '../assets/icons/Asset 6.svg';
import img8 from '../assets/icons/Asset 7.svg';
import img9 from '../assets/icons/Asset 8.svg';
import img10 from '../assets/matcha-tea.png';
import img11 from '../assets/0.png';


function SideBar({ query, setQuery }) {
    const categoryHandler = (category) => {
        setQuery((query) => createQueryObject(query, { category }));
    };

    const categories = [
        { name: "همه‌ی موارد", img: img11 },
        { name: "گرم اسپرسو", img: img2 },
        { name: "سرد  اسپرسو", img: img6 },
        { name: "بار گرم", img: img3 },
        { name: "چای بار", img: img4 },
        { name: "ماچا بار", img: img10 },
        { name: "ماکتیل", img: img7 },
        { name: "اسموتی", img: img8 },
        { name: "شیک ها", img: img9 },
    ];

    return (
        <div className={Styles.sidebar}>
            
            <Swiper
                navigation={false}
                modules={[Navigation]}
                spaceBetween={25}
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