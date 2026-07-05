import { useState } from "react";

function App(){
    const [fruits,setFruits] = useState(["Apple","Banana","mango"])

    const [data,setData] = useState([
        {id:1, name:"ashish" , age:22},
        {id:2, name:"shivam" , age:23},
        {id:3, name:"ritesh" , age:24},
        {id:4, name:"dharambeer" , age:25},
        {id:5, name:"punit" , age:26},
    ]);

    const handleFruits = () => {
        setFruits([...fruits,"orage"])
    }
    const handleData = () => {
        const newData = data.map(item =>(
            item.id ===3 ? {...item,age:66}:item
        ))
        setData(newData);
    }
    return(
        <div>
            <h1>Updating array,object | Ashish decodes</h1>
            <h2>my favourite fruits are :
                {fruits.map((item,index)=>(
                    <h3 key={index}>{item}</h3>
                ))}
                <button onClick={handleFruits}>Add Fruits</button>
                {data.map((item)=>(
                    <div key={item.id}>
                        <h2> my name is {item.name} age is {item.age}</h2>
                    </div>
                ))}
                <button onClick={handleData}>Add Data</button>
            </h2>
        </div>
    )
}
export default App;