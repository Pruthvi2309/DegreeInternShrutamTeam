import React,{useState} from 'react'

function HookCounter3() {
    const [name,setName]=useState({firstName:'', lastName:'',Middlename:''})
  return (
    <div>
      <form>
      <input type="text" value={name.firstName} onChange={e1 =>setName({...name,firstName:e1.target.value})}/>
      <input type="text" value={name.lastName} onChange={e1 =>setName({...name,lastName:e1.target.value})} />
      <input type="text" value={name.Middlename} onChange={e1 =>setName({...name,Middlename:e1.target.value})}/>
      <h2>Your First Name is  - {name.firstName}</h2> 
       <h2>Your Last Name is  - {name.lastName}</h2>
       <h2>Your Middle Name is  - {name.Middlename}</h2>
      {/* <h2>{JSON.stringify(name)}</h2> */}
      </form>
    </div>
  )
}

export default HookCounter3