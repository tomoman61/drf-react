import './css/App.css';
// import BasicReducer from "./reducer/BasicReducer";
// import FetchApi from "./apis/FetchApi";
import AppContext from "./context/AppContext";
import React, { useState, useReducer, useCallback } from 'react'
// import CompB from "./components/CompB";
// import Memo from "./memo/Memo";
import CountDisplay from "./callback/CountDisplay";
import CountClick from "./callback/CountClick";

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

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const addCount1 = useCallback(() => {
        setCount1(count1 => count1 + 1)
    }, [])

    const addCount2 = useCallback(() => {
        setCount2(count2 => count2 + 1)
    }, [])

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
                {/*<Memo />*/}
                <CountDisplay name="count1" count={count1}/>
                <CountClick handleClick={addCount1}>addCount1</CountClick>
                <CountDisplay name="count2" count={count2}/>
                <CountClick handleClick={addCount2}>addCount2</CountClick>
            </header>
         </div>
      </AppContext.Provider>
    );
}

export default App;
