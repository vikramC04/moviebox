import './App.css';
import Form from './components/Form'
import Header from './components/Header';

function Home() {
  return (

    <body>
      <div id="root">
        <div className="App">
          <div className="content">
            <Header />
            <div className="header">
                <h1>MovieCurtain</h1>
            </div>
            <Form />
          </div>     
        </div>
      </div>
    </body>
    
    
  );
}

export default Home;
