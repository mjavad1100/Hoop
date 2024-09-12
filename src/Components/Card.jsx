import { TbListDetails, } from "react-icons/tb";
import { GiHeartPlus } from "react-icons/gi";

import { Link } from "react-router-dom";
// import { shortestText } from "../Help/Helper";
import styles from "./Card.module.css";
import { useCart } from "../Context/CartContext";


function Card({ data }) {
    const { id, title, image, price, recepi } = data;
    const [state, dispatch] = useCart();
    console.log(state)
    const clickHandler = () =>{
dispatch({type:"ADD_ITEM",payload:data});
    };
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.mytitle}>
                <h3>{title}</h3>
                {/* <p>{recepi}</p> */}
                <div style={{ flexDirection: "row", display: "flex" }}>
                    <p> 
                        تـــومان</p>
                    <p style={{ fontSize: "1.1rem" }}>{price}
                    </p>
                </div>

                
                <div className={styles.actions}>
                    <Link to={'/products/${id}'}>
                        <TbListDetails style={{marginTop:"4px"}} />
                    </Link>
                    <div>
                        <button onClick={clickHandler}>
                            <GiHeartPlus />

                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Card