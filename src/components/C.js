import React, { useContext } from 'react'
import AppContext from "../context/AppContext";

const C = () => {
    const value = useContext(AppContext)

    return (
        <>
            <h3>C</h3>
            { value }
        </>
    )
}

export default C
