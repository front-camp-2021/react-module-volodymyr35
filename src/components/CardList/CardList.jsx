import Card from "../Card";
import "./CardList.css";

function CardList({ data = [] }) {
  return (
    <div className="grid">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardList;
