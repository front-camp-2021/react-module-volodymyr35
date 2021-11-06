import { useSelector, useDispatch } from "react-redux";
import CardList from "../components/CardList";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);

  return <CardList data={cart} />;
};

export default Cart;
