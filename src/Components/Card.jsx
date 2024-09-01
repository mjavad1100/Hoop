import { TbListDetails,  } from "react-icons/tb";
import { GiHeartPlus } from "react-icons/gi";

import { Link } from "react-router-dom";
import { shortestText } from "../Help/Helper";
import styles from "./Card.module.css";


function Card({ data }) {
    const { id, title, image, price} = data;
    return (
        <div className={styles.card}>
            <img src={image} alt={title}/>
            <div className={styles.mytitle}>   
            <h3>{shortestText(title)}</h3>
            <p style={{fontWeight:"600", fontSize:"1.3rem"}}>{price}$</p>
            <p>{title}</p>
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