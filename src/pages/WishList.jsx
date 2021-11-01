import { useSelector, useDispatch } from "react-redux";
import CardList from "../components/CardList";
import Button from "../components/Button";
import { removeAllItems } from "../redux/wishlistReducer";

const WishList = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.data);

  return (
    <>
      {wishlist.length ? (
        <Button
          onClick={() => dispatch(removeAllItems())}
          style={{ width: "400px" }}
        >
          Clear All Items
        </Button>
      ) : null}
      <CardList data={wishlist} />
    </>
  );
};

export default WishList;
