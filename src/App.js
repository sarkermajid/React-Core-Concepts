import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Sarker majid in react js first paragraph</p> */}
        <Sarkermajid></Sarkermajid>
        <Sarkermajid></Sarkermajid>
        <Sarkermajid></Sarkermajid>
      </header>
    </div>
  );
}
var profession = 'Laravel Developer';
var education = 'B. Sc in Computer Science and Enginnering';
var skills = {
  'HTML' : 'HTML : Hyper Text Markup Language',
  'CSS' : 'CSS : Cascading Style Sheet',
  'JavaScript' : 'JavaScript : Modern Programming Language',
  'React_Js' : 'React Js : Library of JavaScript language',
}
function Sarkermajid(){
  const sarkerStyle = {
    border : '5px solid #f1c40f',
    borderRadius : '30px',
    margin : '10px',
    padding : '20px',
    backgroundColor : '#2ecc71'
  }
  return (
    <div style={sarkerStyle}>
      <h2>Hey, I'm Sarker Majid</h2>
      <h4>Profession : {profession}</h4>
      <h3>Education : {education}</h3>
      <div>
        <h3>My skills :</h3>
        <p>{skills.HTML}</p>
        <p>{skills.CSS}</p>
        <p>{skills.JavaScript}</p>
        <p>{skills.React_Js}</p>
      </div>
    </div>
  );
}

export default App;
