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

const Card = () => {
  return (
      <div className='cardContainer'>
        <img className='res-img' alt='res-logo' src='https://images.ctfassets.net/cnu0m8re1exe/2h7AqPkPuB6vk0Gcb1a8DM/6d77bc6ffad48ab44348ece23140ebb6/unhealthy_foods.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill'/>
        <div className='res-name'>
          <h3>Hotel Name</h3>
          <h4>⭐️4.5</h4>
        </div>
        <h4>Idli Vada Sambar</h4>
        <h4>15min</h4>
      </div>
  );
}

const BodyComponent = () => {
  return (
    <div className='bodyContainer'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <BodyComponent/>
      
    </div>
  );
}

export default App;
