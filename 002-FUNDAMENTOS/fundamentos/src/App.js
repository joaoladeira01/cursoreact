import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

// comentario

function App() {
  // comentario 
  return (
    <div className="App">
      {/* comentario */}
      <h1>Fundamentos React</h1>
      {/* <FirstComponent />
      <TemplateExpressions />
      <Events /> */}
      <Challenge />
    </div>
  );
}

export default App;
