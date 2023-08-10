import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Namelist from './Components/Namelist'
import Namelist2 from './Namelist2'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ErrorBoundary from './Components/Error Boundary'
// import LoginPage from './Components/Login'
import Login from './Components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Namelist/> */}
        {/* <Namelist2/>  */}
        {/* <MemoComp/> */}
        {/* <PureComp/> */}
        {/*<RegComp/>*/}
        {/* <LoginPage/> */}
        <login/>
        {/*<ErrorBoundary/>*/}
    </>
  )
}

export default App
