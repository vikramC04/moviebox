import '../App.css';
import Form from '../components/Search/Form'
import Header from '../components/Header/Header';

function Home() {
  return (
    <body>
      <div id="root">
        <Header />
        <div className="App">
          <div className="content">
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
