import { useState } from "react"

const Random = ()=>{

    const [number,setNumber] = useState(null);

    function generate(){
        setNumber(Math.floor(Math.random()*100)+1)
    }

    return(
    <div style={{textAlign:"center",marginTop:"20%"}}>
        
        {
            number===null?<h1>No number generated yet</h1>:<h1>{number}</h1>
        }
        <button onClick={generate} style={{padding:"10px",borderRadius:"10px"}}>Generate random number</button>
    </div>)
}

export default Random