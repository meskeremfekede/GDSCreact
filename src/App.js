import logo from './logo.svg';
import './App.css';
import Names from './Names'; 

function App() {
  const names = ['azariya', 'yeabsra', 'etsubdink']; 

  return (
    <div className="App">
      <Names names={names} /> {}
    </div>
  );
}

export default App;