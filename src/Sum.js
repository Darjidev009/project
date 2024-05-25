import React from "react";

function Sum() {
    const [no1, setNo1] = React.useState(0);
    const [no2, setNo2] = React.useState(0);
    const [ans, setAns] = React.useState(0);

    const doSum = () => {
        var a = no1;
        var b = no2;
        var c = parseInt(no1) + parseInt(no2);

        setAns("sum is " + c);

    }
    const doSub = () => {
        var a = no1;
        var b = no2;
        var c = parseInt(no1) - parseInt(no2);

        setAns("minus is " + c);

    }
    return (
        < div className="Vansh">

            <h1 className="Ans">Sum Demo</h1>
            

        
                No1 : <input type="text" className="" onChange={(e) => setNo1(e.target.value)} /><br />
                No2 : <input type="text" className="" onChange={(e) => setNo2(e.target.value)} /><br />
                <input value=" + " onClick={() => doSum()} type="button" />
                <input value=" - " onClick={() => doSub()} type="button" /><br />
                {ans}
            </div>


            );

}
            export default Sum;