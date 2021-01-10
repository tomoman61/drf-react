import React, { useReducer } from 'react'

const initialState = 0
const reducer = useReducer(initialState, action) => {
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

const BasicReducer = () => {
    return (
        <></>
    )
}

export default BasicReducer
