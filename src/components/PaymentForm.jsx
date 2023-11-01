import { Input } from './Input';

function PaymentDetails() {
    return (
        <div> 
            <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
                <h2>Payment details</h2>
                <span style={{fontSize: "14pt", lineHeight: "1.2", marginBottom: "20px"}}>We accept all major credit cards. Please ensure that you enter your details exactly as they appear on your credit card statement. All fields are required unless is indicated.</span>
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "1.5em"}}>
                <Input title="Cardholder name" className="payment" aria-label="Enter Cardholder name"/>
                <Input title="Card number" className="payment" aria-label="Enter Card number name"/>
                <Input title="Expiration Date" className="payment-small" placeholder={"MMYY"} aria-label="Enter Expiration date"/>
                <Input title="CVV" className="payment-small" aria-label="Enter CVV"/>
            </div>
        </div>
    )
}

function BillingAddress() {
    return (
        <div style={{display: "flex", flexDirection:"column", gap: "16px"}}>
            <h2>Billing address</h2>
            
            <div style={{display: "flex", flexDirection: "column", gap: "1.5em"}}>
                <Input title="Street Address" className="address" aria-label="Enter Street Address"/>
                <Input title="Apt, Suite, Unit Number (Optional)" className="address" aria-label="Enter Apt or Suite or Unit Number, Optional field"/>
                <Input title="City/ Town" className="address" aria-label="Enter City or Town"/>
                <Input title="Country" className="address" isDropDown placeholder="Select a country" aria-label="Enter a Country"/>
                <Input title="State / Province" className="address" isDropDown placeholder="Select a state or province" aria-label="Enter State or Province"/>
                <Input title="Zip / Postal code" className="address" aria-label="Enter Zip or Postal code"/>
                <Input title="Phone number" className="address" aria-label="Enter Phone number"/>
                <Input title="Email receipt to" className="address" aria-label="Enter Email to receive receipt"/>
            </div>
        </div>
    )
}

function FormSubmission() {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "1.5em"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                <input style={{width:"32px", height:"32px"}} type="checkbox" aria-label="Agree to Terms and Conditions"></input>
                <label style={{fontSize: "large"}}>I agree  to the <u>terms & conditions</u></label>
            </div>
            <button style={{width: "70%", color: "white", background: "black", padding:"15px", fontSize:"large", fontWeight:"bold", borderRadius: "5px"}} aria-label="Buy Miles">Buy Miles</button>
        </div>
    )
}
  
 export function PaymentForm() {
    return (
      <div style={{display: "flex",  flex: 3}}>
        <div style={{display: "flex", gap: "24px", flexDirection: "column"}}>
          <PaymentDetails/>
          <BillingAddress/>
          <FormSubmission/>
        </div>
      </div>
    )
  }

