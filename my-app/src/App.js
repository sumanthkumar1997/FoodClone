import logo from './logo.svg';
import './App.css';

const Header = () => {
  return (
<header className="App-header">
  <img className="Logo" src={logo}/>

  <ul className='nav'>
     <li>Home</li>
     <li>About Us</li>
     <li>More</li>
  </ul>
  
</header>
  );
} 

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
