import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface MODELS_TYPES {
  id: number;
  name: string;
  avatar: string;
  price: number;
  gearbook?: string;
  description?: string;
  marka?: string;
  tanirovka?: string;
  mator?: string;
  year?: string;
  color?: string;
  distance?: string;
}

const Models: React.FC = () => {
  const [modelsData, setModelsData] = useState<MODELS_TYPES[]>([]);
  const [modelsError, setModelsError] = useState<string | null>(null);
  const { name: categoryName } = useParams<{ name: string }>();
  const MODELS = `https://66e3ddf6d2405277ed121c0f.mockapi.io/${categoryName}`;

  useEffect(() => {
    const handleModels = async () => {
      const response = await fetch(MODELS);

      if (!response.ok) {
        throw new Error("Javob rost emas!");
      }
      try {
        const result = await response.json();
        setModelsData(result);
        setModelsError(null);
      } catch (err: any) {
        setModelsError(err.message || "Somtheng went wrong!");
      }
    };
    handleModels();
  }, [MODELS]);

  return (
    <div className="models">
      {modelsData.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`} state={{ model: item }}>
          <div>
            <img src={item.avatar} alt={item.name + " image"} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Models;
