
export default async function fetchUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    if (!res.ok){
        throw new Error("failed to fetch user data");
    }
    return res.json();
}