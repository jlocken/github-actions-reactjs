import './App.css';
import Home from './components/home'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <Home />
      </main>
    </div>
  );
}

export default App;
