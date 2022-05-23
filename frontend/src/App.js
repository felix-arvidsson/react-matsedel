import './App.css';
import Navbar from './components/navbar/navbar'
import Welcome from './components/welcome/welcome'
import Recept from './components/recept/recept'
import { Container } from 'postcss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>testar2!</p>
      <Recept />
    </div>
  );
}

export default App;
