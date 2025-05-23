import React from 'react'
import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <div 
    id='counter'
    className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold mb-4'>Counter: {count}</h1>
        <div className='flex space-x-4'>
            <button onClick={increment} className='bg-green-500 text-white px-4 py-2 rounded'>Increment</button>
            <button onClick={decrement} className='bg-blue-500 text-white px-4 py-2 rounded'>Decrement</button>
        </div>
       <iframe
      src="https://v3.tailwindcss.com/docs/guides/vite"
      title="Example Website"
      width="600"
      height="400"
      style={{ border: '1px solid black' }}
    />

    </div>
  )
}

export default Counter
