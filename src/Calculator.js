import React, { useState } from "react";
import './Calculator.css'

function Calculator() {

    const [value, setValue] = useState('');

    return (
          
            <div className="">
                <div className="cal">
                    <h1>Calculator</h1>
                </div>
                
                <div className="Dev">
               
                    <form action="">
                        <div className="display">
                            <input className="display" type="text" value={value} />
                        </div>


                        <input type="button" value="AC" className="Ac" onClick={e => setValue('')} /><br />
                        <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="-" onClick={e => setValue(value + e.target.value)} /><br />

                        <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="6" onClick={e => setValue(value + e.target.value)} /><br />



                        <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="2" onClick={e => setValue(value + e.target.value)} /><br />


                        <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value="=" className="equal" onClick={e => setValue(eval(value))} /><br />

                    </form>


             
            </div>
        </div>


    )

}
export default Calculator