import logo from './logo.svg';
import './App.css';


function App() {

  const products = [
    {name : 'Photoshop', price : '$90.99'},
    {name : 'MS Word', price : '$20.99'},
    {name : 'Vs Code', price : '$99.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Sarkermajid></Sarkermajid>
        <Person name='Sarker Majid' profession='Software Engineer' address='77 Maniknagar, Dhaka-1203' education='CSE' gender='Male'></Person>
        <Person name='Sohan Khan' profession='Web Designer' address='Basabo' education='CSE' gender='Male'></Person>
        <Person name='Rumjhum' profession='Veppi' address='Mirpur' education='CSE' gender='Female'></Person>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
      </header>
    </div>
  );
}

function Sarkermajid(){
  var profession = 'Laravel Developer';
  var education = 'B. Sc in Computer Science and Enginnering';
  var skills = {
  'HTML' : 'HTML : Hyper Text Markup Language',
  'CSS' : 'CSS : Cascading Style Sheet',
  'JavaScript' : 'JavaScript : Modern Programming Language',
  'React_Js' : 'React Js : Library of JavaScript language',
  };
  
  const sarkerStyle = {
    border : '5px solid #f1c40f',
    borderRadius : '30px',
    margin : '10px',
    padding : '20px',
    backgroundColor : '#2ecc71',
    color : 'red',
    fontSize : '20px'
  };
  return (
    <div style={sarkerStyle}>
      <h2>Hey, I'm Sarker Majid</h2>
      <h4>Profession : {profession}</h4>
      <h3>Education : {education}</h3>
      <div style={sarkerStyle}>
        <h3>My skills :</h3>
        <h6>{skills.HTML}</h6>
        <h6>{skills.CSS}</h6>
        <h6>{skills.JavaScript}</h6>
        <h6>{skills.React_Js}</h6>
      </div>
    </div>
  );
}

function Person(props){
  return(
    <div style={{ border : '3px solid red', backgroundColor : 'black', color : 'yellow', width : '500px', margin : '10px', padding : '20px', borderRadius : '20px', fontSize : '16px'}}>
      <h3>Name : {props.name}</h3>
      <p>Profession : {props.profession}</p>
      <p>Address : {props.address}</p>
      <p>Education : {props.education}</p>
      <p>Gender : {props.gender}</p>
    </div>
  )
}

function Product(props){

  const productStyle = {
    border : '2px solid gray',
    borderRadius : '5px',
    backgroundColor : 'black',
    color : 'yellow',
    margin : '10px',
    padding : '20px',
    height : '200px',
    width : '200px',
    float : 'left'
  }
  return(
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h5>{props.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;
