import { useLocation } from "react-router-dom";

import { useRef, useState } from "react";
const Item: React.FC = () => {
  const [img, setImg] = useState<boolean>(true);
  const location = useLocation();
  const model = location.state?.model;

  if (!model) {
    return <div>Model not found!</div>;
  }

  const handleCheck = () => {};

  return (
    <div className="item mt-[30px] flex gap-[30px]">
      <div className="sidebar p-[30px] bg-slate-100 w-[400px] text-center flex gap-[10px] flex-col ">
        <h2 className="text-[36px] text-blue-500 text-left">{model.name}</h2>
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Narxi:</span> {model.price}{" "}
        </p>
        <img
          className="mt-[20px] mb-[20px]"
          src={model.avatar}
          alt={model.name}
        />
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Marka:</span> {model.marka}
        </p>
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Tanirovka:</span>{" "}
          {model.tanirovka}
        </p>
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Yil:</span> {model.year}
        </p>
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Rang: </span>
          {model.color}
        </p>
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Distantsiya:</span>{" "}
          {model.distance}
        </p>
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Karobka:</span>{" "}
          {model.gearbook}
        </p>
        <p className="text-[18px] text-left">
          <span className="text-blue-900 font-bold">Description:</span>{" "}
          {model.description}
        </p>
        <p className="text-[18px] text-left">
          {" "}
          <span className="text-blue-900 font-bold">Umumiy xarajat:</span>{" "}
          {model.minus}
        </p>
      </div>
      <div className="main-item">
        <h1 className="text-blue-500 text-[36px]">{model.name}</h1>
        <img src={img ? model.avatar : model.inavatar} alt="" />
        <form className="form flex gap-[20px]">
          <label form="tashqi">
            Tashqi:
            <input id="tashqi" type="radio" />
          </label>
          <label form="ichki">
            Ichki:
            <input id="ichki" type="radio" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Item;
