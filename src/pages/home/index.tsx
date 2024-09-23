import ModelCar from "../../components/organisms/model_card";
import { useEffect, useState } from "react";
interface MODEL_TYPE {
  id: number;
  name: string;
  avatar: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<MODEL_TYPE[]>([]);
  const CAR_MODEL = "https://66e3ddf6d2405277ed121c0f.mockapi.io/Model";

  useEffect(() => {
    const fetch_data = async () => {
      try {
        const response = await fetch(CAR_MODEL);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data: MODEL_TYPE[] = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };
    fetch_data();
  }, []);

  return (
    <div className="home flex gap-[100px] flex-wrap items-center">
      {data.map((item) => (
        <ModelCar key={item.id} name={item.name} avatar={item.avatar} />
      ))}
    </div>
  );
};
export default Home;
