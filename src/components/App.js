
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [budget, setBudget] = useState(0)
  const items = [
    {name:"Apple",price:20},
    {name:"Banana",price:10},
    {name:"Neutella",price:30},
    {name:"Razor",price:5},
  ]
  return (
    <div>
        {/* Do not remove the main div */}
        <h3>Enter your budget to check available items:</h3>
        <input type="number" value={budget} onChange={e=>setBudget(e.target.value)} />
        <h3>Items you can buy are in Green color</h3>
        <ul>
          { 
            items.map((item,i)=><li>{item.name} <span style={{color:item.price<budget?'green':'red'}} >{item.price}</span></li>)
          }
        </ul>
    </div>
  )
}

export default App
