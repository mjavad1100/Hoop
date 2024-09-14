import { useParams } from "react-router-dom";
import { useProductDetails } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import styles from "./DetailsPage.module.css"
function DetailsPage  () {
    const {id} = useParams();
    const productDetails = useProductDetails(+id);
    return (

        <div className={styles.container}>
            <img src={productDetails.image} alt={productDetails.title} />
            <div className={styles.information}>
                <h3 className={styles.title}>{productDetails.title}</h3>
                <p className={styles.description}>{productDetails.recepi}</p>
                <p className={styles.category}>{productDetails.category}</p>
                <div>
                    <span className={styles.price}>{productDetails.price}</span>
                    <Link to="/products" className={styles.button}>
                   <button> back to menu</button>
                    </Link>
                </div>

            </div>
        </div>

    );
}

export default DetailsPage;
