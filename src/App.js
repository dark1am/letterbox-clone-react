import './App.css';
import Nav from './components/Nav';
import banner from './banner.png';

function App() {
  return (
    <div className="App">

      <Nav />

      <div className="main-container">
                <div className="space"></div>
                <div className="sample">
                <img src={banner} alt=""/>
                <h1><a href="">Collect, curate, and share. Lists are the perfect way to group films.</a></h1>
                </div>
            </div>
    </div>
  );
}

export default App;