import { useParams } from "react-router-dom";
import { useProductDetails } from "../Context/ProductContext";
import { Link } from "react-router-dom";
function DetailsPage  () {
    const {id} = useParams();
    const productDetails = useProductDetails(+id);
    return (
        <div>
            <img src={productDetails.image} alt={productDetails.title} />
            <div>
                <h3>{productDetails.title}</h3>
                <p>{productDetails.recepi}</p>
                <p>{productDetails.category}</p>
                <div>
                    <span>{productDetails.price}</span>
                    <Link to="/products">
                    back to menu
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default DetailsPage;
