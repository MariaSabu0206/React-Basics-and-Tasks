import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiplication } from './Counterslice'
import { addition, subtraction ,division } from './Slice2'

export function Counter() {
  const {count} = useSelector((state) => state.counter)
  const {value} = useSelector((state) => state.test2)
  const dispatch = useDispatch()
  const todispatch = useDispatch()

  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="multiplication value"
          onClick={() => dispatch(multiplication())}
        >
          multiplication
        </button>
        <br />
        <h1>ADDITION BY 2</h1>
    <h2>{value}</h2>

        <button onClick={() => dispatch(addition())}
        >
          Add 2
        </button> <br />
        <h1>Subtraction By 2</h1>
        <h2>{value}</h2>
        <button onClick={() => dispatch(subtraction())}
        >
          Subtract 2
        </button>
        <br />
        
        <h1>Divide By 2</h1>
        <h2>{value}</h2>
        <button onClick={() => dispatch(division())}
        >
          Divide by 2
        </button>
      </div>
    </div>
  )
}