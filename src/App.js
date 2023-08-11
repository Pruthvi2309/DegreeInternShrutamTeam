import './App.css';
import Look from './Components/Look';
import Mid from './Components/Mid';
import Mid1 from './Components/Mid1';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Look/>
      <Mid/>
      <Mid1/>
      <Post/>
    </div>
  );
}

export default App;
