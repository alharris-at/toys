import { useState } from 'preact/hooks'
import './app.css'
import viteLogo from '/vite.svg'
import { get_greeting } from './toys.gleam';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={viteLogo} alt="Vite Logo" />
      <h1 class="text-3xl font-bold underline">{get_greeting()}</h1>
      <div class="card flex flex-col">
        <span>Count is {count}</span>
        <div class="flex flex-row">
          <button onClick={() => setCount((count) => count + 1)}>
            Inc
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            Dec
          </button>
        </div>
      </div>
    </>
  )
}
