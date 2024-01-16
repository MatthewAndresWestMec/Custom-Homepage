import Search from './Components/GoogleSearchBar';
// import SoundComponent from './Components/SoundEffects';
import RandomizedQuote from './Components/RandomQuote';
import Weather from './Components/Weather';
import SubMenu from './Components/Sub-Menu';
import Accordion from './Components/Accordion';
import Music from './Components/Music';
import './Styles/index.css';

function App() {
  return (
    <>
      <div className='main-container'>
        <h1 className='boogle-heading'>BOO-gle</h1>
        <Search />
        <SubMenu />
        <Accordion />
      </div>

      {/* <SoundComponent/> */}

      <footer className='app-footer'>
        <Music className='music' />
      </footer>
    </>
  );
}

export default App;
