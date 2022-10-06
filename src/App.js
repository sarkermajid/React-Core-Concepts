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
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle = {
    border: '2px solid red',
    backgroundColor: 'black',
    color: 'yellow',
    margin: '10px',
    padding: '20px'
  } 
  return (
    <div style={personStyle}>
      <h3>Sarker majid</h3>
      <h5>Laravel Developer</h5>
    </div>
  )
}

export default App;
