import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

import "./cart.css";
import { calculateTotals, clearCart } from "../cartSlice";
import { Button } from "react-bootstrap";
const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, totalAmt, noOfItems } = useSelector((store) => store.cart);

  function onClearCart() {
    dispatch(clearCart());
  }

  function calTotal() {
    dispatch(calculateTotals());
  }

  if (noOfItems < 1) {
    return (
      <div className='p2'>
        <section className="cart">
          <header>
            <h2 style={{ fontFamily: 'Times New Roman' }}>Dear Customer, </h2>
            <h4 style={{ fontFamily: 'Times New Roman' }}>Currently, Your Bag is Empty</h4>
          </header>
        </section>
      </div>
    );
  }

  return (
    <div className='p2' >
      <section className="cart">
        <header>
          <h2>your Cart</h2>
        </header>
        <div>
          {calTotal()}
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item._id}
                id={item._id}
                amount={item.qty}
                price={item.Prices}
                title={item.FullName}
                img={"http://localhost:5000".concat(item.Images)}
              />
            );
          })}

        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>Rs. {totalAmt.toFixed(2)}</span>
            </h4>
          </div>
          <Button variant='dark' onClick={onClearCart} style={{ margin: '10px' }}>
            Clear Cart
          </Button>
          <Button onClick={calTotal} variant='dark' style={{ margin: '10px' }}>Total</Button>
        </footer>
      </section>
    </div>
  );
};
export default CartContainer;
