import React, { useContext } from 'react'
import AppContext from "../context/AppContext";

const CompC = () => {
    const { dispatchProvided } = useContext(AppContext)
    return (
        <>
            <button onClick={()=>dispatchProvided('add_1')}>孫　Add + 1</button>
            <button onClick={()=>dispatchProvided('multiple_3')}>孫　Multiple * 3</button>
            <button onClick={()=>dispatchProvided('reset')}>孫　reset</button>
            <button onClick={()=>dispatchProvided()}>孫　default</button>
        </>
    )
}

export default CompC
