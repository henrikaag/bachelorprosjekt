import './App.css';
import NavBarTop from './components/NavBar/NavBarTop';
import NavBarBot from './components/NavBar/NavBarBot';
<<<<<<< Updated upstream
import HorizontalNavBar from './components/NavBar/HorizontalNavBar';
=======
import HorizontalExample from './components/NavBar/HorizontalNavBar';
import ForYouPage from './components/ForYou/ForYouPage';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarTop />
        <NavBarBot />
      </header>
      <main>
<<<<<<< Updated upstream
        <body className='body'>
        <HorizontalNavBar />
=======
        <body>
        <ForYouPage/>
>>>>>>> Stashed changes
        </body>

      </main>
    </div>
  );
}

export default App;
