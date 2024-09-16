import { useCart } from '../Context/CartContext';
import Basketcart from './Basketcart';
import styles from './Chekout.module.css'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function CheckOut ()  {
    const [state, dispatch] =useCart();
    const clickHandler = (type, payload) => dispatch({type,payload})

    return (
        
        <div>
           <div>
                    <Link to="/products" className={styles.button}>
                   <button className={styles.buttons}><IoMdClose />
                   </button>
                    </Link>
                </div>
            <div>
                
                {state.selectedItems.map((product)=> (   <Basketcart key={product.id} data={product} clickHandler={clickHandler}/>))}
             
            </div>
        </div>
    );
}

export default CheckOut;
