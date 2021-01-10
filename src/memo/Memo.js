import React, { useState, useMemo } from 'react'

const Memo = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const addCount1 = () => {
        setCount1(count1 => count1 + 1)
    }
    const addCount2 = () => {
        setCount2(count2 => count2 + 1)
    }

    // const isOdd = () => {
    //     let i = 0
    //     while (i < 500000000)
    //         i++
    //     return count1 % 2 !== 0
    // }

    const isOdd = useMemo(() => {
        let i = 0
        while (i < 500000000)
            i++
        return count1 % 2 !== 0
    }, [count1])

    return (
        <>
            <button onClick={addCount1}>Count1: { count1 }</button><br/>
            <span>{ isOdd ? 'Odd number' : 'even number' }</span>
            <button onClick={addCount2}>Count2: { count2 }</button>
        </>
    )
}

export default Memo
