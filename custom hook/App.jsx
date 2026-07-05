import useFetch from "./useFetch";

function App(){
    const data = useFetch("https://jsonplaceholder.typicode.com/users")
    return(
        <div>
            <h1>Custom Hook</h1>
            <ul>
                {data && data.map((user)=>(
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App;