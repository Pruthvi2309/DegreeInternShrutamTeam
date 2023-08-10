
import './App.css';
//  import First from './components/First';
//  import { Greet } from './components/Greet';
//  import { Greek1 } from './Program/Greek1';
//  import Second from './components/Second';
//  import Third from './Program/Third';
 import "bootstrap/dist/css/bootstrap.min.css"
 import "bootstrap/dist/js/bootstrap.min.js"
//  import Message from './Program/Message';
//  import Memocomp from './Program/Memocomp';
//  import Namelist from './Program/Namelist';
 import React from 'react';
 import { BrowserRouter, Route, Routes } from "react-router-dom";
//  import Signin from './components/Signin';
//  import Signup from './components/Signup';
//  import LifecycleA from './Program/LifecycleA';
//  import Portaldemo from './Program/Portaldemo';
//  import Portaldemo2 from './components/Portaldemo2';
//  import Refsdemo from './Program/Refsdemo';
//  import RegComp from './components/RegComp';
//  import ErrorBoundary from './components/ErrorBoundary';
//  import Hero from './components/Hero';
//  import ClassCounter from './components/ClassCounter';
//  import HookCounter from './components/HookCounter';
//  import HookCounter2 from './components/HookCounter2';
//  import Registration from './components/Registration';
//  import Login from './components/Login';
//  import HookCounter4 from './components/HookCounter4';
//  import HookCounter3 from './components/HookCounter3';
//  import HookMouse from './components/HookMouse';
//  import ClassMouse from './components/ClassMouse';
// import Navbar from './components/Navbar';
import Index from './components/Index';
// import DataFatching1 from './components/DataFatching1';
// import DataFatching2 from './components/DataFatching2';
// import DataFatching3 from './components/DataFatching3';
// import HookCounterOne from './components/HookCounterOne';
// import IntervalClassCounter from './Program/IntervalClassCounter';
import Kids from './components/Kids';
import Men from './components/Men';
import Women from './components/Women';
import Footer from './components/Footer';
// import IntervalHookCounter from './IntervalHookCounter';
// import ClassCounterOne from './ClassCounterOne';
// import HoverCounter from './components/HoverCounter';
import Header from './components/Header';


     function App() {
       return (
        <div className="App">
         {/* <Index/> */}
         {/* <Men/> */}
         {/* <Navbar/>  */}
         {/* <LifecycleA/> */}
        {/* <Portaldemo/> */}
           {/* <Portaldemo2/>  */}
            {/* <Refsdemo/> */}
       {/* <Signin/>
   <Signup/> */}
  {/* <BrowserRouter>
     <Routes>
           <Route path="/" element={<Signup />} /> 
           <Route path="/sign-in" element={<Signin />} /> 
         </Routes>
  </BrowserRouter>  */}
        {/* <RegComp/> */}
         {/* <ErrorBoundary> */}
          {/* <Hero heroName="Batman"></Hero> */}
          {/* <Hero heroName="Superman"></Hero>
       <Hero heroName="Joker"></Hero>
          </ErrorBoundary> */}
          {/* <ClassCounter/> */}
         {/* <HookCounter/>  */}
        {/* <HookCounter2/> */}
        {/* <Registration/> */}
         {/* <Login/> */}
  {/* <HookCounter4/> */}
        {/* <HookCounter3/> */}
         {/* <HookMouse/> */}
    {/* <ClassMouse/> */}
    {/* <DataFatching1/> */}
    {/* <DataFatching2/> */}
    {/* <DataFatching3/> */}
    {/* <HookCounterOne/> */}
    {/* <IntervalClassCounter/> */}
    {/* <Kids/> */}
    {/* <IntervalHookCounter/> */}
    {/* <ClassCounterOne/> */}
    {/* <HoverCounter/> */}
    <Header/>
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/Men" element={<Men/>}/>
      <Route path="/Women" element={<Women/>}/>
      <Route path="/Kid" element={<Kids/>}/>
    </Routes>
        <Footer/>
    
     </div>
        
 );
}
 export default App;


