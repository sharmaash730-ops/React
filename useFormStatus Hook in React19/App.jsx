import SubmitBtn from "./SubmitBtn"

function App(){
  const handleSubmit = async() => {
    await new Promise((resolve) => setTimeout(resolve,2000))
    console.log("Form submit")
  }
  return(
    <div>
      <h1>UserFormStatus Hook in React19</h1>
      <form action={handleSubmit}>
        <SubmitBtn />
      </form>
    </div>
  )
}
export default App