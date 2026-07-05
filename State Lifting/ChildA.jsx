function ChildA({setMsg}){
    const handleMsg = (e) =>{
        setMsg(e.target.value);
    }
    return(
        <div>
            <h1>Child A</h1>
            <input type="text" onChange={handleMsg} class="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"/>
        </div>
    )
}
export default ChildA;