// src/App.jsx
import './App.css'
import { SAMPLES } from './data/samples'

function App() {
  return (
    <div className="container">
      <h1>DAFT-PUNKCHPAD</h1>
      <div className="grid">
        {SAMPLES.map(sample => (
          <button key={sample.id} className="pad">
            {sample.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App