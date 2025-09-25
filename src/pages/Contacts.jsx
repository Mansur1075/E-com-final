
import React, { useState } from 'react'
import Container from '../components/Container'
import { useDispatch } from 'react-redux'
import { allproduct } from '../components/slice/productSlice'

const Contacts = () => {
  let dispatch = useDispatch()
  let [text, setText] = useState("")

  let handleInput =(e)=>{
    setText(e.target.value);
    
  }
  let hendleSubmit =()=>{
  dispatch(allproduct (text))
  }
  return (
    <Container>
        <div className="py-10">
           <input onChange={handleInput} type="text" placeholder='scrce' />
           <button onClick={hendleSubmit}>submit</button>
        </div>
    </Container>
  )
}

export default Contacts