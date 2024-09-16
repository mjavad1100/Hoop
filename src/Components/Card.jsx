import { TbListDetails } from "react-icons/tb";
// import { GiHeartPlus } from "react-icons/gi";

import { Link } from "react-router-dom";
// import { shortestText } from "../Help/Helper";
import styles from "./Card.module.css";
import { useCart } from "../Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { productQuantity } from "../Help/Helper";
import { RiStickyNoteAddFill } from "react-icons/ri";


function Card({ data }) {
    const { id, title, image, price, recepi } = data;
    const [state, dispatch] = useCart();
    const quantity = productQuantity(state, id);
    const clickHandler = (type) => {
        dispatch({ type, payload: data });
    };
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <div className={styles.mytitle}>
                <h3>{title}</h3>
                <div style={{ flexDirection: "row", display: "flex" ,justifyContent:"start",alignItems:"center"}}>
                    <p>
                        تـــومان</p>
                    <p style={{ fontSize: "1.1rem" }}>{price}
                    </p>
                </div>
                <div className={styles.actions}>
                    <Link to={`/products/${id}`}>
                        <TbListDetails style={{ marginTop: "4px" }} />
                    </Link>

                    <div>
                        {quantity === 1 && (<button onClick={() => clickHandler("REMOVE_ITEM")}>
                            <MdDeleteOutline />
                        </button>)}
                        {quantity > 1 && (<button onClick={() => clickHandler("DECREASE")}>
                            -
                        </button>)}
                        {!!quantity && <span>{quantity}</span>
                        }
                        {quantity === 0 ? (<button onClick={() => clickHandler("ADD_ITEM")}>
                            <RiStickyNoteAddFill />
                        </button>) : (<button onClick={() => clickHandler("INCREASE")}>
                            +
                        </button>)}



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card