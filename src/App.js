import React, { useState } from "react"
import Main from "./components/Main"
import SideNavigation from "./components/SIdeNavigation"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="grid grid-cols-5">
      <SideNavigation className="col-span-1" />
      <Main className="col-span-4" />
    </div>
  )
}

export default App