import './CardList.css';
import Card from '../Card';

function CardList({ data = [] }) {
  return (
    <div className="grid">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default CardList;
