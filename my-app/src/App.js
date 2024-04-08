import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <img className="Logo" src={logo}/>

        <ul className='nav'>
           <li>Home</li>
           <li>About Us</li>
           <li>More</li>
        </ul>
        
      </header>
    </div>
  );
}

export default App;
