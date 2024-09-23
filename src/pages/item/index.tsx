import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/organisms/breadcrumb/Breadcrumb";

const Item = () => {
  const location = useLocation();
  const itemData = location.state;
  console.log(itemData);

  if (!itemData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <Breadcrumb />
      <h1>{itemData.name}</h1>
      <img src={itemData.avatar} alt={itemData.name} />
      <p>Price: {itemData.price}</p>
      <p>Description: {itemData.description || "No description available"}</p>
    </div>
  );
};

export default Item;
