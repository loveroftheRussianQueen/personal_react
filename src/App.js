import Particles from 'react-particles-js';
import './App.scss';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Sidebar/>
        <Hero name="Alim" surname="Budaev">
            <Particles/>
        </Hero>
      <About/>
        </div>
    </div>
  );
}

export default App;
