function App(){
  const name = "ashish";
  let a = 10;
  let b = 20;
  let isloggedIn = true;
  let user = {
    name:"Ashish",
    age:23
  }
  let fruits = ["apple","banana","orange"];
  function add(x,y){
    return x + y;
  }
  return( 
    <div>
      <h1>My React App {name}</h1>
      <p>A + B is {a+b}</p>
      <p>{isloggedIn ? "welcome back!" : "please log in"}</p>
      <p>{add(5,10)}</p>
      <button onClick={() => alert("Button clicked!")}>Click me</button>
      <p>{isloggedIn && "you are Logged in"}</p>
      <p>{user.name} is {user.age} years old</p>
      <p>{fruits[1]} is my favourite fruit</p>
    </div>
  );
}
export default App;