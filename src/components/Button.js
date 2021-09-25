import React from "react"
import '../index.css'

const Button = ({ 
  variant = 'default', 
  color = 'default', 
  size = 'md', 
  disableShadow = false,
  startIcon = '',
  endIcon = '',
  ...props
}) => {
  
  const buttonTypes = {
    default: {
      default: 'text-gray-700 bg-gray-200 hover:bg-gray-300',
      primary: 'text-white bg-blue-600 hover:bg-blue-700',
      secondary: 'text-white bg-gray-600 hover:bg-gray-700',
      danger: 'text-white bg-red-600 hover:bg-red-700'
    },
    outline: {
      default: 'bg-white text-blue-600 hover:bg-blue-100 ring-1 ring-blue-600',
      primary: 'bg-white text-blue-600 hover:bg-blue-100 ring-1 ring-blue-600',
      secondary: 'bg-white text-gray-600 hover:bg-gray-100 ring-1 ring-gray-600',
      danger: 'bg-white text-red-600 hover:bg-red-100 ring-1 ring-red-600'
    },
    text: {
      default: 'bg-white text-blue-600 hover:bg-blue-100',
      primary: 'bg-white text-blue-600 hover:bg-blue-100',
      secondary: 'bg-white text-gray-600 hover:bg-gray-100',
      danger: 'bg-white text-red-600 hover:bg-red-100',
    },
  }

  let styles = buttonTypes[variant][color]

  if(!disableShadow) {
    styles += ' shadow-md'
  }

  if(startIcon !== '') {
    return (
      <button
      className={`btn ${size} ${styles} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      <span className="material-icons-round text-base pr-2">{startIcon}</span>
      Default
    </button>
    )
  }

  if(endIcon !== '') {
    return (
      <button
      className={`btn ${size} ${styles} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      Default
      <span className="material-icons-round text-base pl-2">{endIcon}</span>
    </button>
    )
  }

  return (
    <button
      className={`btn ${size} ${styles} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      Default
    </button>
  )
}

export default Button