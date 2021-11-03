import { React, useState } from "react";
import { useParams } from "react-router";

const Card = () => {
  const [card] = useState([
    {
      id: 1,
      name: "Newyork",
      img: "http://1.bp.blogspot.com/-HxaFxmB8kZg/T89-RJdUXGI/AAAAAAAADyo/bfD336mdNbQ/s1600/Manhattan+New+York+City+8.jpg",
    },
    {
      id: 2,
      name: "BunosAires",
      img: "https://daily.sevenfifty.com/app/uploads/2018/01/SFD_Buenos_Aires_CR_Irene_Tinta_iStock_2520x1420.jpg",
    },
    {
      id: 3,
      name: "Buraidah",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Buraidah.jpg/500px-Buraidah.jpg",
    },
  ]);
  const { id } = useParams();
  const item = card.find((it) => {
    return it.id === Number(id);
  });
  return (
    <div>
      {console.log(id)}
      <h1>{item.name}</h1>
      <img src={item.img} />
    </div>
  );
};

export default Card;
