import { useState } from "react";

function App(){
    const [gender,setGender] = useState("male");
    const [country,setCountry] = useState("India");

    const countries = ["India","Canada","UK","USA","Australia"];

    return(
        <div>
            <h1>Radio Button and Select Dropdown</h1>
            <h2>Select Gender</h2>
            <div>
                <label>
                    <input type="radio" value="male" name="gender" checked={gender==="male"}
                    onChange={(e) => setGender(e.target.value)}/>
                    Male
                </label>
                <label>
                    <input type="radio" value="female" name="gender" checked={gender==="female"}
                    onChange={(e) => setGender(e.target.value)}/>
                    Female
                </label>
                <label>
                    <input type="radio" value="other" name="gender" checked={gender==="other"}
                    onChange={(e) => setGender(e.target.value)}/>
                    other
                </label>
            </div>
            <p>Selected:{gender}</p>
            <div>
                <h1>Select Dropdown Country</h1>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                    {countries.map((country,index)=>(
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
            <h2>Selected country : {country}</h2>
        </div>
    )
}
export default App;