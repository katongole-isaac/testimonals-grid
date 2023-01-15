import Card from "./card";
import "./styles/card.styles.css";
import data from "../data";

const CardLsit = () => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.alt} {...item} />
      ))}
    </>
  );
};

export default CardLsit;
