import { useActionState } from "react"

export default function App() {
    const [message, formAction, pending] = useActionState(submitFeedback, "");

    async function submitFeedback(prevState, formData) {
        const name = formData.get("name");
        const feedback = formData.get("feedback");66

        await new Promise((resolve) => setTimeout(resolve,2000))

        if (name && feedback) {
            return `Thank you ${name} for your feedback:"${feedback}"`;
        } else {
            return "please fill in all fields.";
        }
    }
    return (
        <>
            <h2>useActionState Hook in React19 | Ashish Decodes</h2>
            <form action={formAction}>
                <input type="text" name="name" placeholder="Enter Your name" />
                <br />
                <br />
                <textarea name="feedback" placeholder="Enter your feedback" />
                <br />
                <br />
                <button type="submit" disabled={pending}>Submit</button>
                <p>{message}</p>
            </form>
        </>
    )
}