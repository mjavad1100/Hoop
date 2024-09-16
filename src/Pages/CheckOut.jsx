import { useCart } from '../Context/CartContext';
import Basketcart from './Basketcart';

function CheckOut ()  {
    const [state, dispatch] =useCart();
    const clickHandler = (type, payload) => dispatch({type,payload})

    return (
        <div>
            <div>
                {state.selectedItems.map((product)=> (   <Basketcart key={product.id} data={product} clickHandler={clickHandler}/>))}
             
            </div>
        </div>
    );
}

export default CheckOut;
