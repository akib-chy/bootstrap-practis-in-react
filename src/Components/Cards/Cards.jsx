import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  const allShoes = [
    {
      name: "Bata",
      price: "2,300",
      img: "https://static-01.daraz.com.bd/p/030f611d9d7067162caa3a002f1d298a.jpg",
    },
    {
      name: "Lotto",
      price: "2,500",
      img: "https://static-01.daraz.com.bd/p/030f611d9d7067162caa3a002f1d298a.jpg",
    },
    {
      name: "Apex",
      price: " 1,200",
      img: "https://static-01.daraz.com.bd/p/030f611d9d7067162caa3a002f1d298a.jpg",
    },
    {
      name: "Puma",
      price: "4,100",
      img: "https://static-01.daraz.com.bd/p/030f611d9d7067162caa3a002f1d298a.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allShoes.map((shoes) => (
          <Card shoes={shoes}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
