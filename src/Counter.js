import React from "react";
function Counter(){
    const[no, setNo] = React.useState(0);
    var msg="";
    if(no %2===0){
        msg="No is Even";
    }
    else {
        msg="No is Odd";
    }

    return(
        <div className="Vansh">
        <h1>Check Odd or Even</h1>
        <h1>{no}</h1>
        {msg}
        <br/>
        <button name="btn" className="bttn" onClick={() => setNo(no+1)}>+</button>
        <button name="btn" className="bttn" onClick={() => setNo(no-1)}>-</button>
        <button name="btn" className="bttn" onClick={() => setNo(0)}>Reset</button>
        
        </div>
    )
}
export default Counter;