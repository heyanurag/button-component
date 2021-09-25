import React from "react"

const Code = ({code}) => {
  return (
    <code>
      <pre className="font-ubuntumono text-xs py-3 w-60">
        {code}
      </pre>
    </code>
  )
}

export default Code