import { TbListDetails,  } from "react-icons/tb";
import { GiHeartPlus } from "react-icons/gi";

import { Link } from "react-router-dom";
// import { shortestText } from "../Help/Helper";
import styles from "./Card.module.css";


function Card({ data }) {
    const { id, title, image, price, recepi} = data;
    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div className={styles.mytitle}>   
            <h3>{title}</h3>
            <div style={{flexDirection:"row", display:"flex"}}>
            <p href=""> هــــزار
            تـــومان</p>
            <p  style={{fontSize:"1.1rem"}}>{price}
                                </p>
                                
            </div>
           
            <p>{recepi}</p>
            <div className={styles.actions}>
                <Link to={'/products/${id}'}>
                    <TbListDetails />
                </Link>
                <div>
                    <button>
                    <GiHeartPlus />

                    </button>
                </div>
           </div>
           </div>
        </div>
    )
}

export default Card