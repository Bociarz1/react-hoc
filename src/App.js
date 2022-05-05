import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import KeyCounter from './components/KeyCounter';

function App() {
  return (
    <div className="App">
      <h2>
        There are some functions enhanced by High Order Component
      </h2>
      <ClickCounter/> <br/>
      <HoverCounter/> <br/>
      <KeyCounter/>
    </div>
  );
}

export default App;