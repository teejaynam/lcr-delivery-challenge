import "../styles/Input.css"

export function Input({ title, isDropDown, placeholder, className }) {

    if (isDropDown) {
        return (
            <div className={className} style={{display: "flex", flexDirection: "column", gap: "6px"  }}> 
                <span>{title}</span>
                <select>
                    <option>{placeholder}</option>
                </select>
            </div>
        )
    }

    return (
        <div className={className} style={{display: "flex", flexDirection: "column", gap: "6px" }}> 
            <span>{title}</span>
            <input placeholder={placeholder}/>
        </div>
    )
}