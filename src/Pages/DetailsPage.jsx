import { useParams } from "react-router-dom";
import { useProductDetails } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import styles from "./DetailsPage.module.css"
function DetailsPage  () {
    const {id} = useParams();
    const productDetails = useProductDetails(+id);
    return (
        <>
                <div>
                    <Link to="/products" className={styles.button}>
                   <button className={styles.buttons}><IoMdClose />
                   </button>
                    </Link>
                </div>
        <div className={styles.container}>
            <img src={productDetails.image} alt={productDetails.title} />
            <div className={styles.information}>
                <h3 className={styles.title}>{productDetails.title}</h3>
                <p className={styles.description}>{productDetails.recepi}</p>
                    <span className={styles.price}>{productDetails.price}</span>

            </div>
        </div>
</>

    );
}

export default DetailsPage;
