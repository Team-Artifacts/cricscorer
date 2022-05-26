import './App.css';
import Hotlinks from './component/Hotlinks';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Hotlinks/>
      </header>
    </div>
  );
}

export default App;
