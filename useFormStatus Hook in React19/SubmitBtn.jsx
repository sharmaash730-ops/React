import {useFormStatus} from "react-dom"
function SubmitBtn() {
    const {pending} = useFormStatus();
    console.log(pending)
    return (
        <div>
            <input type="text" name="username" placeholder="Username" />
            <br></br>
            <br></br>
            <input type="email" name="Email" placeholder="Useremail" />
            <br></br>
            <br></br>
            <input type="password" name="password" placeholder="UserPassword" />
            <br></br>
            <br></br>
            <button type="submit" disabled={pending}>{pending ? "Submitting...":"Submit"}</button>
        </div>
    )
}
export default SubmitBtn;