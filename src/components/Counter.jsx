import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremant, increment, incrementByamount, reset } from '../Redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)  
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = ()=>{
    if(amount){
      // dispatch action with input amount
      dispatch(incrementByamount(amount))
    }else{
      alert("Please input some Values")
    }
  }
  
  return (
    <div className='border rounded  p-5 text-center'>
        <h1 style={{fontSize:'70px'}}>{count}</h1>
        <div className='d-flex justify-content-between mt-5'>
            <button onClick={()=>dispatch(decremant())} className='btn btn-warning'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5">
            <input onChange={e=>setAmount(e.target.value)} placeholder='Input Increment Amount' type="text" className='form-control' />
            <button onClick={handleIncrementAmount} className='btn btn-primary ms-3'>Increment By Amount</button>
            
        </div>
    </div>
  )
}

export default Counter