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
      <div className='navbar'>
        <div className='weather-container'>
          <Weather />
        </div>
        <div
          className='quote-container'
          style={{ marginLeft: 'auto', marginRight: '0' }}>
          <RandomizedQuote className='randomized-quote' />
        </div>
      </div>

      <h1 className='boogle-heading'>Google</h1>
      <Search />
      <SubMenu />
      <Accordion />
      {/* <SoundComponent/> */}

      <footer className='app-footer'>
        <Music className='music' />
      </footer>
    </>
  );
}

export default App;
