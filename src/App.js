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
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>Md. Majidur Rahman Sarker <br />
            Username : {person.username} <br />
            Job : {person.job}
        </h1>
        <Person name='Sarker Majid' profession='Laravel Developer'></Person>
        <Person name='Sohan Khan' profession='Frontend Developer'></Person>
        <Person name='Tanvir Ahmed' profession='Data Scientist'></Person>
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

export default App;
