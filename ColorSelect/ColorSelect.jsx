import { useState } from "react";

const ColorSelect = () => {
    const [color, setColor] = useState('#FFFFFFF');
    const handleColor = (event) => {
        setColor(event.target.value);
    }
    return (
        <div className="color-pick-container">
            <h1>Choose a color</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color:{color}</p>
            </div>
            <label>Choose a color:</label>
            <input type="color" value={color} onChange={handleColor} />
        </div>
    )
}
export default ColorSelect;