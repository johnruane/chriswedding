import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text">Chris &amp; Ilona's wedding stream</h1>
      <div className="container">
        <iframe className="responsive-iframe" src="https://www.youtube.com/embed/n3apKHFp9Iw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default App;
