import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface CATEGORY_TYPES {
  id: number;
  name: string;
  avatar: string;
}
const Home: React.FC = () => {
  const [breadcrumb, setBreadCrumb] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<CATEGORY_TYPES[]>();
  const [warning, setWarning] = useState<string | null>(null);

  const CATEGORY = "https://66e3ddf6d2405277ed121c0f.mockapi.io/Category";

  const changeBreadCrumb = () => {
    setBreadCrumb(true);
  };

  useEffect(() => {
    const getModelData = async () => {
      try {
        const responce = await fetch(CATEGORY);
        if (!responce.ok) {
          throw new Error("Javob rost emas!");
        }
        const result = await responce.json();
        setCategoryData(result);
        setWarning(null);
      } catch (err: any) {
        setWarning(err.message || "Somtheng went wrong!");
      }
    };
    getModelData();
  }, [CATEGORY]);

  return (
    <div className="home  mt-[100px]">
      <h1 className="text-blue-600 text-[36px] mb-[50px]">Kategoriyalar</h1>
      <div className="flex  gap-[20px] ">
        {categoryData?.map((item) => (
          <Link key={item.id} to={`/models/${item.name}`}>
            <div className="w-[300px]  ">
              <img
                className="h-[200px]"
                src={item.avatar}
                alt={item.name + " image"}
              />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
