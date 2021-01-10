import './App.css';
// import BasicReducer from "./reducer/BasicReducer";
// import FetchApi from "./apis/FetchApi";
import AppContext from "./context/AppContext";
import React, { useReducer } from 'react'
// import CompB from "./components/CompB";
import Memo from "./memo/Memo";

const initialState = 0
const reducer = (currentState, action) => {
    switch (action) {
        case 'add_1':
            return currentState + 1
        case 'multiple_3':
            return currentState * 3
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
      <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
         <div className="App">
            <header className="App-header">
                <h3>App.js</h3>
                {/*<FetchApi />*/}
                {/*<B />*/}
                {/*<BasicReducer />*/}
                {/*親Count: { count }*/}
                {/*<CompB />*/}
                <Memo />
            </header>
         </div>
      </AppContext.Provider>
    );
}

export default App;
