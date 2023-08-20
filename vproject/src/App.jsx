import { useState } from 'react'
import './App.css'
import First from './Components/First'
import Message from './Components/Message'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Loginpage from './Components/Loginpage'
import Signup from './Components/Signup'
import NameList from './Components/Namelist'
import NameList2 from './Components/Namelist2'
import MemoComp from './Components/MemoComp'
import Regularcomp from './Components/Regularcomp'
import PureComp from './Components/Purecomp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First/>
      {/* <Message/>
      <Loginpage/>
      <Loginpage/>
      <Signup/>
      <NameList/>
      <NameList2/>
      <MemoComp/>
      <Regularcomp/>
  <PureComp/>*/}
    </>
  )
}

export default App
