import { useNavigate } from "react-router-dom";
import Details from "../../../pages/details";
interface ModelCarProps {
  name: string;
  avatar: string;
}

const ModelCar: React.FC<ModelCarProps> = ({ name, avatar }) => {
  const navigate = useNavigate();
  const goToItem = () => {
    navigate(`/details?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="model_car flex flex-col w-[289px] " onClick={goToItem}>
      <img src={avatar} alt={name} className="w-[289px] h-[220px]" />
      <h2 className="text-center">{name}</h2>
    </div>
  );
};

export default ModelCar;
