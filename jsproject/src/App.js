
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import First from './Components/First';
import { Second } from './Components/Second';
import Third from './Components/Third';
import { Greet } from './Components/Greet';
import Message from './Components/Message';
import Myform from './Components/Myform';
import Men from './Components/Men';
function App() {
  return (
    <div className="App">
      {/* <First/>
      <Second/>
      <Third/>
      <Greet name="Rushi" age="22" heroname="Rockybhai"></Greet>
      <Message/>
      <Myform/> */}
      <Men/>
    </div>
  );
}

export default App;
