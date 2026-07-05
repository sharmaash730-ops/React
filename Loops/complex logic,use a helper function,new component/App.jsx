import { useState } from "react";
import User from "./User";

function App() {
    const user = ["Mohit", "Ravi", "Saurabh"];
    return (
        <div>
            <h1>Map Loops</h1>
            <ul>
                {
                    user.map((user, index) => (
                        <User key={index} item={user} />
                    ))
                }
            </ul>
        </div>
    )
}
export default App;