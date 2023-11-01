import "../styles/OrderSummary.css"

export function OrderSummary (props) {
    const { activeCard } = props;

    const tax = (0.13 * Number(activeCard.cost))
    const totalCost = (tax + Number(activeCard.cost))

    return (
        <div className="orderSummaryBox" >
            <div className="orderSummaryDetails" style={{gap: "12px", display: "flex", flexDirection:"column", width: "100%"}}>
            <h2>Order summary</h2>
                <div><hr/></div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <span>Total miles</span>
                    <b>{activeCard.amount}</b>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px"}}>
                    <span>GST/HST </span>
                    <b>${tax.toFixed(2)}</b>
                </div>
                <div><hr/></div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <span>Total cost </span>
                    <b>${totalCost.toFixed(2)}</b>
                </div>
            </div> 
        </div>
    )
}