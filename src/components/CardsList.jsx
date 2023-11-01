import React from "react";
import { CardsListItem } from "./CardsListItem" 
import { cardData } from '../../challenge/cardData'



export function CardsList({ setActiveCard, isActive }) {

  return (
    <div style={{display: "flex", flexDirection: "row", gap: "18px", width: "100%"}}> 
      {cardData.map((card, index) => (
        <CardsListItem
          key={index}
          type={card.type.charAt(0).toUpperCase() + card.type.slice(1)}
          amount={card.amount}
          cost={card.cost.toFixed(2)}
          setActiveCard={() => setActiveCard(card)}
          isActive={isActive(card)}
        />
      ))}
    </div>
  );
};