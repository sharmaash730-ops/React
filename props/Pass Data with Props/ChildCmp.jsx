const ChildCmp = (props) =>{
    console.log(props)
    return(
    <div>
        <h2>Child Component Name: {props.name}</h2>
    </div>
    )
}
export default ChildCmp;