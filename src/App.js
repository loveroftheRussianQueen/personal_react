import Particles from 'react-particles-js';
import './App.scss';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Sidebar/>
        <Hero name="Alim" surname="Budaev">
            <Particles/>
        </Hero>
      <About/>
      <Service/>
      <Form/>
      <Footer/>
        </div>
    </div>
  );
}

export default App;
