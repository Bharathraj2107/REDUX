import React,{ useState } from 'react'
import {toast} from 'react-toastify'
function Update(props) {
  const[transaction,setTransaction]=useState({
    title:"",
    amount:0
  });
  const readInput =async(e)=>{
    const {name,value}=e.target;
    setTransaction({...transaction,[name]:value})
  }
  const submitHandler=async(e)=>{
    e.preventDefault()
    try{
      console.log('data=',transaction)
    }catch(err){
      toast.error(err.message)
    }
  }
  return (
   <div className="container">
    <div className="row mt-3">
     <div className="col-md-6 offset-md-3">
      <div className="card">
        <div className="card-header">
          <h3 className='text-secondary card-title'>
            Update Transaction
          </h3>
        </div>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <div className="form-group mt-2">
              <label htmlFor="title">Transaction Title</label>
              <input type="text" name="title" id="title" className='form-control' value={transaction.title} onChange={readInput}required placeholder='title' />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="title">Transaction Amount</label>
              <input type="text" name="amount" id="amount" className='form-control' value= {transaction.amount} onChange={readInput}required placeholder='amount in rupees' />
            </div>
            <div className="form-group mt-2">
              <input type="submit" value="Add transaction" className='btn btn-outline-secondary' />
            </div>
          </form>
        </div>
      </div>
     </div>
    </div>
   </div>
  )
}

export default Update
