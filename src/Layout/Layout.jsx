import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { useCart } from "../Context/CartContext";
import styles from './Layout.module.css';
import { PiNotepadBold } from "react-icons/pi";
import img1 from '../assets/hope-03.svg';
import img2 from '../assets/sticky-note_2.png'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";




import { PiShoppingCartSimpleBold } from "react-icons/pi";
function Layout({ children }) {
    const [state] = useCart();
    return (
        <>
            {/* <header className={styles.header}>
                <div style={{height:"40px"}}>
               

                </div>
                <Link to="/products">
                    <img src={img1} style={{ width: "150px", height: "70px" }} />
                </Link>
            </header> */}

            {children}
                <div className={styles.mynotelist}>
                    <Link to="/checkout">
                            <img src={img2}/>
                        {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                    </Link>
                </div>
        </>
    );
}

export default Layout;
