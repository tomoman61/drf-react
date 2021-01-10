import './App.css';
import BasicReducer from "./reducer/BasicReducer";
// import FetchApi from "./apis/FetchApi";
// import AppContext from "./context/AppContext";
// import B from './components/B'

function App() {
  return (
      // <AppContext.Provider value={'value from App.js'}>
         <div className="App">
            <header className="App-header">
                {/*<FetchApi />*/}
                {/*<B />*/}
                <BasicReducer />
            </header>
         </div>
      // </AppContext.Provider>
  );
}

export default App;
