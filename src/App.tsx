import './App.scss';
import { Technologies } from './components/technologies';
import { Hero } from './components/hero';
import { Companies } from './components/companies';
import { Education } from './components/education';
import { Experience } from './components/experience';

function App() {
  return (
    <div className="app">
      <Hero />
      <Technologies />
      <Companies />
      <div>
        <div className='circles-section'>
          <div className='data-container'>
            <Education />
          </div>
          <div className='data-container'>
            <Experience />
          </div>
          
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
