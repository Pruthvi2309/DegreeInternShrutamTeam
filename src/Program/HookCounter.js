import React , {useState} from 'react'

function HookCounter() {
    const [count,setMyCount]=useState(0)
  return (
    <div>
        <button onClick={ () => setMyCount(count+5) }> {`Count ${count} `}</button>
    </div>
  )
}
export default HookCounter
