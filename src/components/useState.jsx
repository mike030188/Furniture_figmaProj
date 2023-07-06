import React, { useState } from 'react'
import { Button1, Usestate } from './style';

const UseState = () => {
    const [number, setNumber] = useState(0);
    const increament =() => {
        setNumber(number + 1)
    }

    const decreament =() => {
        if (number > 0) {
            setNumber(number - 1)
        } else {

        }
    }
  return (
    <Usestate>
        <p>{number} set</p>
        <Button1 onClick={increament}>+</Button1>
        <Button1 onClick={decreament}>-</Button1>
    </Usestate>
  )
}

export default UseState