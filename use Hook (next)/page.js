import { use } from "react";
import fetchUser from "./fetchUser";

const App = () => {
  const user = use(fetchUser())
  return(
    <div>
      <h1>App page</h1>
      <p><strong>Name:</strong>{user.name}</p>
      <p><strong>Email:</strong>{user.email}</p>
      <p><strong>Phone:</strong>{user.phone}</p>
    </div>
  )
}
export default App;