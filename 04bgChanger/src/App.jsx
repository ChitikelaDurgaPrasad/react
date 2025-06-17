import { useState } from "react"

function App() {
const [color, setColor] = useState("olive");
// const changeColor = (color) => {
//   setColor(color);
// }
  return (
    <>
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center" style={{backgroundColor: color}}>
          <div className="p-4 bg-white d-flex gap-2 rounded-3">
            <button className="border border-white rounded-3 text-white bg-success p-2 px-3" onClick={() => setColor('green')}>Green</button>
            <button className="border border-white rounded-3 text-white bg-secondary p-2 px-3" onClick={() => setColor("gray")}>Gray</button>
            <button className="border border-white rounded-3 text-white bg-danger p-2 px-3" onClick={() => setColor("red")}>Red</button>
          </div>
      </div>
    </>
  )
}

export default App
