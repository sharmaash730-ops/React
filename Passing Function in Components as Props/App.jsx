import User from "./User";
function App() {
  const channelName = (name) =>{
    alert(name);
  };
  return (
    <div>
      <User channelName={channelName} name="ashish"/>
      <User channelName={channelName} name="shivam"/>
      <User channelName={channelName} name="sharma"/>
      <User channelName={channelName} name="dev"/>
    </div>
  )
}
export default App;