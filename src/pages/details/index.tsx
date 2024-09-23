import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loader from "../../components/organisms/loader";
import DetailCard from "../../components/organisms/detail_card";
import Breadcrumb from "../../components/organisms/breadcrumb/Breadcrumb";

interface DETAIL_CAR {
  id: number;
  name: string;
  avatar: string;
  price: number;
}

const Details = () => {
  const [detailData, setDetailData] = useState<DETAIL_CAR[]>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // useNavigate hookini ishlatamiz

  const name = searchParams.get("name");
  const DETAIL_CAR = `https://66e3ddf6d2405277ed121c0f.mockapi.io/${name}`;

  useEffect(() => {
    const detail_data = async () => {
      try {
        const response = await fetch(DETAIL_CAR);
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data: DETAIL_CAR[] = await response.json();
        setDetailData(data);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    };

    detail_data();
  }, [name]);

  return (
    <div className="flex flex-wrap justify-between">
      <Breadcrumb />
      {detailData ? (
        detailData.map((item) => (
          <div
            className="bg-slate-500"
            key={item.id}
            onClick={() => navigate(`/item/${item.id}`, { state: item })}
          >
            <DetailCard
              name={item.name}
              price={item.price}
              avatar={item.avatar}
            />
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Details;
