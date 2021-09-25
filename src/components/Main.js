import React from "react"
import Code from "./Code"
import Button from "./Button"

const Main = () => {
  return (
    <div className="pt-12 pl-16 w-max ">

      <h1 className="font-poppins text-3xl py-1 font-medium text-gray-700">Buttons</h1>

      <div className="grid grid-cols-2 mb-11">
        <div>
          <Code code="<Button/>" />
          <Button />
        </div>
        <div>
          <Code code="&:hover, &:focus" />
          <Button />
        </div>      
      </div>
      
      <div className="grid grid-cols-2 mb-11">
        <div>
          <Code code={"<Button variant=\"outline\"/>"} />
          <Button variant='outline' />
        </div>
        <div>
          <Code code="&:hover, &:focus" />
          <Button variant='outline' />
        </div>      
      </div>

      <div className="grid grid-cols-2 mb-11">
        <div>
          <Code code={"<Button variant=\"text\"/>"} />
          <Button variant='text' />
        </div>
        <div>
          <Code code="&:hover, &:focus" />
          <Button variant='text' />
        </div>      
      </div>

      <div className="grid grid-cols-1 mb-11">
        <div>
          <Code code={"<Button disableShadow color=\"primary\"/>"} />
          <Button disableShadow color='primary' />
        </div>  
      </div>
      <div className="grid grid-cols-2 mb-11">
        <div>
          <Code code={"<Button disabled />"} />
          <Button disabled />
        </div>      
        <div>
          <Code code={"<Button variant=\"text\" disabled />"} />
          <Button variant='text' disabled />
        </div>      
      </div>

      <div className="grid grid-cols-2 mb-11">
        <div>
          <Code code={"<Button startIcon=\"local_grocery_store\" />"} />
          <Button color="primary" startIcon="local_grocery_store" />
        </div>
        <div>
          <Code code={"<Button endIcon=\"local_grocery_store\" />"} />
          <Button color="primary" endIcon="local_grocery_store"/>
        </div>      
      </div>

      <div className="grid grid-cols-3 mb-11">
        <div>
          <Code code={"<Button size=\"sm\"/>"} />
          <Button size='sm' color='primary' />
        </div>
        <div>
          <Code code={"<Button size=\"md\"/>"} />
          <Button size='md' color='primary' />
        </div>  
        <div>
          <Code code={"<Button size=\"lg\"/>"} />
          <Button size='lg' color='primary' />
        </div>  
      </div>


      <div className="grid grid-cols-4 mb-11">
        <div>
          <Code code={"<Button color=\"default\"/>"} />
          <Button />
        </div>
        <div>
          <Code code={"<Button color=\"primary\"/>"} />
          <Button color='primary' />
        </div>  
        <div>
          <Code code={"<Button color=\"secondary\"/>"} />
          <Button color='secondary' />
        </div>  
        <div>
          <Code code={"<Button color=\"danger\"/>"} />
          <Button color='danger' />
        </div>    
      </div>
      
      <div className="grid grid-cols-4 mb-11">
        <div>
          <Code code={"&:hover, &:focus"} />
          <Button />
        </div>
        <div>
          <Code code={" "} />
          <Button color='primary' />
        </div>  
        <div>
          <Code code={" "} />
          <Button color='secondary' />
        </div>  
        <div>
          <Code code={" "} />
          <Button color='danger' />
        </div>    
      </div>
      
    </div>
  )
}

export default Main