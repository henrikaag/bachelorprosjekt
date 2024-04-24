import './App.css';
import NavBarTop from './components/NavBar/NavBarTop';
import NavBarBot from './components/NavBar/NavBarBot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarTop />
        <NavBarBot />
      </header>
    </div>
  );
}

export default App;
