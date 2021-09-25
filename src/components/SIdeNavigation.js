import React from "react"

const SideNavigation = () => {
  return (
    <nav className="bg-gray-50 min-h-screen">
      <div className="p-11">
        <div className="font-poppins font-semibold text-sm mb-16">
          <span className="text-red-600">Button</span> Components
        </div>

        <div className="flex flex-col">
          <a className="SideNavigation-Link" href="/">
            Color
          </a>
          <a className="SideNavigation-Link" href="/">
            Typography
          </a>
          <a className="SideNavigation-Link" href="/">
            Spaces
          </a>
          <a className="SideNavigation-Link SideNavigation-Link-Active" href="/">
            Buttons
          </a>
          <a className="SideNavigation-Link" href="/">
            Inputs
          </a>
          <a className="SideNavigation-Link" href="/">
            Grid
          </a>
        </div>
      </div>     
    </nav>
  )
}

export default SideNavigation