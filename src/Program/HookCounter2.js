import React , {useState} from 'react'

function HookCounter2() {
    const initialcount =0
    const[count,setCount]=useState(initialcount)
    // const incrFive=()=>{
    //     for(let i=0; i<5; i++)
    //     {
    //         setCount(myprev => myprev+5)
    //     }
    // }
  return (
    <div>Count : {count}
    <button onClick={ ()=>setCount(initialcount)}>Reset</button>
    <button onClick={ ()=>setCount(prevcount => prevcount+1)}>Increament</button>
    <button onClick={ ()=>setCount(prevcount => prevcount-1)}>Dncreament</button>
    <button onClick={ ()=>setCount(prevcount => prevcount+5)}>Increment 5</button>
    </div>
  )
}

export default HookCounter2