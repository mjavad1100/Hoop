import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import { useCart } from "../Context/CartContext";
import styles from './Layout.module.css';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
function Layout({ children }) {
    const [state] = useCart();
    return (
        <>
            <header className={styles.header}>
                <Link to="/products">Hoop</Link>
                <div>


                <Link to="/checkout">
                <PiShoppingCartSimpleBold />
                    {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                </Link>
                </div>
            </header>

            {children}
        </>
    );
}

export default Layout;
