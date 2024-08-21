import { useState } from "react"

const CounterPage = () => {
return(
    <div style={{minHeight: '100vh', display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{border: '1px solid', padding: 30}}>
            <div style={{fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>0</div>
                <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <button style={{border: '1px solid', padding: 30, marginRight: 10, color: 'white'}}>+</button>
                    <button style={{border: '1px solid', padding: 30,  color: 'white'}}>-</button>
                </div>
        </div>
    </div>      
    )
}
export default CounterPage;