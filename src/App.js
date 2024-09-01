import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Search from './components/Search';

function App() {
  return (
    <body>
      <div id="root">
        <div className="App">
          <div className="content">
            <div className="header">
                <h1>MovieBox </h1>
            </div>
            <Form />
          </div>     
        </div>
      </div>
    </body>
    
  );
}

export default App;
