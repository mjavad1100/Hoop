import { MdDeleteOutline } from "react-icons/md"
import styles from './Basketcart.module.css'
function Basketcart({data,clickHandler}) {
  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title}/>
        <p>{data.title}</p>
        <div className={styles.actions}> 
            {data.quantity ===1 && (<button onClick={() => clickHandler("REMOVE_ITEM",data)}><MdDeleteOutline/></button>)}
            {data.quantity > 1 && (<button onClick={() => clickHandler("DECREASE",data)}>-</button>)}
            <span>{data.quantity}</span>
            <button onClick={() => clickHandler("INCREASE",data)}>+</button>
        </div>
    </div>
  )
}

export default Basketcart