import { CardsList } from "./CardsList";

export function FormHeader({ setActiveCard, isActive }) {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems:"center", gap: "24px"}}>
            <h1>Get your rewards faster. Buy, Gift or Transfer Miles today!</h1>
            <CardsList setActiveCard={setActiveCard} isActive={isActive}/>
        </div>
    )
}