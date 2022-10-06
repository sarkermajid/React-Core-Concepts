import './App.css';

function App() {
  var person = {
    username: 'sarker majid',
    job: 'React js Developer'
  };
  var style = {
    color: 'yellow',
    backgroundColor: 'black',
    padding: '20px'
  }

  const Items = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illastrator', price:'$60.99'},
    {name: 'Primer Pro', price:'$70.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>Md. Majidur Rahman Sarker <br />
            Username : {person.username} <br />
            Job : {person.job}
        </h1>
        <Person name='Sarker Majid' profession='Laravel Developer'></Person>
        <Product name={Items[0].name} price={Items[0].price}></Product>
        <Product name={Items[1].name} price={Items[1].price}></Product>
        <Product name={Items[2].name} price={Items[2].price}></Product>
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
    padding: '20px'
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
    color: 'yellow',
    backgroundColor:'black',
    borderRadius: '20px',
    border:'1px solid green',
    margin:'10px',
    padding:'10px',
    height:'250px',
    width:'200px'
  }
  return(
  <div style={productStyle}>
    <h4>{props.name}</h4>
    <h5>{props.price}</h5>
    <button>Buy now</button>
  </div>
  )
}

export default App;
