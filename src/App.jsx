
import './App.css'
import { useState } from 'react';
import { FormHeader, OrderSummary, PaymentForm } from './components'
import { cardData } from '../challenge/cardData'


function App() {

  const [activeCard, setActiveCard] = useState(cardData[0]);
  const isActive = (card) => card === activeCard;
  

  return (
    <div style={{display: "flex", flexDirection:"column", justifyContent: "center", fontFamily: "Arial", fontSize: "Medium", padding: "32px"}}>
      <FormHeader setActiveCard={setActiveCard} isActive={isActive}/>
      <div style={{display: "flex", flexDirection: "column", paddingTop: "24px"}}>
        <div style={{display: "flex", gap: "64px"}}>
          <PaymentForm/>
          <div style={{display: "flex", flex:2, alignContent: "flex-start", flexWrap: "wrap"}}>
            <OrderSummary activeCard={activeCard}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
