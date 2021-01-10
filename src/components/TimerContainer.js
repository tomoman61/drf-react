import React, { useState } from 'react';
import Timer from "./Timer";

const TimerContainer = () => {
    const [display, setDisplay] = useState(true)
    return (
        <>
            <button onClick={()=>setDisplay(!display)}>Switch Time</button>
            { display && <Timer /> }
        </>
    )
}

export default TimerContainer
