import "../styles/CardsListItem.css"

export function CardsListItem(props) {
    const { type, amount, cost, setActiveCard, isActive} = props;

    const cardClassName = isActive ? 'active-card' : 'card';

    const classNames = [cardClassName, 'card'].join(' ');

    return (
        <button className={classNames} onClick={setActiveCard}>
            <div style={{display: "flex", width: "100%"}}>
                <div className="card-content">
                    {type} {amount} miles<br/>
                    <b>${cost}</b>
                </div>
            </div>
        </button>
    )

}