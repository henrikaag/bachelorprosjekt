import './App.css';
import NavBarTop from './components/NavBar/NavBarTop';
import NavBarBot from './components/NavBar/NavBarBot';
import HorizontalNavBar from './components/NavBar/HorizontalNavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarTop />
        <NavBarBot />
      </header>
      <main>
        {/* <body className='body'> */}
        <HorizontalNavBar />
        {/* </body> */}

      </main>
    </div>
  );
}

export default App;
