import { useLocation } from "react-router-dom";

const Item: React.FC = () => {
  const location = useLocation();
  const model = location.state?.model;

  if (!model) {
    return <div>Model not found!</div>;
  }

  return (
    <div className="item">
      <h2>{model.name}</h2>
      <img src={model.avatar} alt={model.name} />
      <p>Price: {model.price}</p>
    </div>
  );
};

export default Item;
