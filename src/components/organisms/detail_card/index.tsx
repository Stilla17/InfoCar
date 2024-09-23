interface DETAIL_CARD {
  name: string;
  avatar: string;
  price: number;
}
const DetailCard: React.FC<DETAIL_CARD> = ({ avatar, name, price }) => {
  return (
    <div className="detail_card w-[289px]  ">
      <img src={avatar} alt={name + " image"} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default DetailCard;
