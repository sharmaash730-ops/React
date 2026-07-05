function ChildComponent({children,name}){
    return(
        <div>
            <h2>Child Component {name}</h2>
            {children}
        </div>
    );
}

function App(){
    return(
        <div>
            <h1>React Children prop | Ashish Decodes</h1>
            <ChildComponent name="Ashish">
                <p>ye hai children Props</p>
            </ChildComponent>
        </div>
    )
}
export default App;