import { useMemo } from "react";

function DrivedState({riceQuantity,price}){
    const totalPrice = useMemo(()=>{
        return riceQuantity*price;
    }
    ,[riceQuantity,price]);
    return(
        <div>
            <h1>Derived State in React | Ashish Decodes</h1>
            <p>Rice Total Price:{totalPrice}</p>
        </div>
    );
}
export default DrivedState;