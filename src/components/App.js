
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [budget, setBudget] = useState(0)
  const items = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Neutella", price: 30 },
    { name: "Razor", price: 5 },
    { name: "CornFlakes", price: 15 },
    { name: "Sound Bar", price: 50 },
    { name: "Iphone", price: 80 },
  ]
  return (
    <div>
      {/* Do not remove the main div */}
      <h3>Enter your budget to check available items:</h3>
      <input type="number" value={budget} onChange={e => setBudget(e.target.value)} />
      
      <table>
        <thead>
          <th>Items you can buy are in Green color</th>
        </thead>
        <tbody>
          {
            items.map((item, i) => <tr>
              <td>{item.name}</td>
               <td style={{ color: item.price <= budget ? 'green' : 'red' }} >{item.price}</td></tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
