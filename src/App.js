import './App.css';
import { useState } from 'react';

function App() {
  var person = {
    username: 'sarker majid',
    job: 'React js Developer'
  };
  var style = {
    color: 'yellow',
    backgroundColor: 'black',
    padding: '20px',
    border:'2px solid orange',
    borderRadius:'20px'
  }

  const product_items = [
    {name:'photoshop', price:'$99.99'},
    {name:'Illustrator', price:'$70.99'},
    {name:'Phpstorm', price:'$129.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={style}>Md. Majidur Rahman Sarker <br />
            Username : {person.username} <br />
            Job : {person.job}
        </h2>
        <ul>
          Product Name:
          {
            product_items.map(product_items => <li>{product_items.name}</li>)
          }
        </ul>
        <ul>
           Product Price:
           {product_items.map(product_items => <li>{product_items.price}</li>)}
        </ul>
        <Person name='Sarker Majid' profession='Laravel Developer'></Person>
        <Product name={product_items[0].name} price={product_items[0].price}></Product>
        <Product name={product_items[1].name} price={product_items[1].price}></Product>
        <Product name={product_items[2].name} price={product_items[2].price}></Product>
        <Counter></Counter>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle = {
    border: '2px solid red',
    backgroundColor: 'black',
    color: 'yellow',
    margin: '10px',
    padding: '20px',
    borderRadius:'10px'
  } 
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <h5>Professtion: {props.profession}</h5>
    </div>
  )
}

function Product(props){

  const productStyle = {
    backgroundColor:'black',
    height:'250px',
    width:'200px',
    color:'yellow',
    borderRadius:'10px',
    border:'2px solid green',
    margin:'10px',
    padding:'10px'
  }

  return(
    <div style={productStyle}>
      <h4>{props.name}</h4>
      <h5>{props.price}</h5>
      <button>buy now</button>
    </div>
  )
}

function Counter(){

  const counterStyle={
    height:'300px',
    width:'500px',
    backgroundColor:'red',
    color:'black',
    margin:'10px',
    padding:'10px',
    borderRadius:'10px',
    border:'2px solid black'
  }

  const buttonStyle = {
    backgroundColor:'black',
    color:'yellow',
    borderRadius:'10px',
    padding:'10px'
  }

  const [count, setCount] = useState(0);

  return(
    <div style={counterStyle}>
      <h1>Counter: {count}</h1>
      <button style={buttonStyle} onClick={()=> setCount(count+1)}>Increment ++</button>
      <br />
      <button style={buttonStyle} onClick={()=> setCount(count-1)}>Decrement --</button>
    </div>
  )
}

export default App;
