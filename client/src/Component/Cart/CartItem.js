import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../cartSlice";
import { BsFillArrowUpCircleFill,BsFillArrowDownCircleFill } from 'react-icons/bs'
import {Button} from 'react-bootstrap'

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{id}</h5>
        <h4>{title}</h4>
        <h4 className="item-price">Rs .{price}</h4>
        <Button variant='dark'
          onClick={() => {
            dispatch(removeItem(id));
          }}>
          Remove
        </Button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}>
          <h1 style={{color:'white'}}> <BsFillArrowUpCircleFill /> </h1>
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}>
          <h1 style={{color:'white'}}> <BsFillArrowDownCircleFill  /> </h1>

        </button>
      </div>
    </article>
  );
};
export default CartItem;
