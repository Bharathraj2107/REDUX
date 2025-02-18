import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { deleteTransaction } from '../Redux/Actions/ExpenseAction'
function Transactions(props) {
    const {trans}=props

    let dispatch=useDispatch()

    const deletehandler=async(id)=>{
        if(window.confirm(`Are you sure to delete transaction?`)){
            await dispatch(deleteTransaction(id)).unwrap().then(res=>{
                toast.success(res.data.msg)
            }).catch(err=>toast.error(err.response.data.msg))
        }
    }
  return (
    <div className="row mt-3">
  <div className="col-md-6 offset-md-3">
    <div className="card">
        <div className="card-header">
            <h4 className='text-center' text-secondary>Transactions</h4>
        </div>
        <div className="card-body">
            <ul className='list-group'> 
               {
                trans?.map((item,index)=>{
                    return(
                        <li className='list-group-item d-flex justify-content-between key={index}'>
                            <div className="d-flex flex-column">
                                <strong>{item.title}</strong>
                                <span className='text-secondary'>&#8377;{item.amount}</span>
                            </div>
                            <div>
                                <NavLink to={`/edit/${item._id}`} className='btn btn-sm btn-info me-3'>
                                <i className='bi bi-pencil'></i>
                                </NavLink>
                                <button  onClick={()=>deletehandler(item._id)}className='btn btn-sm btn-danger'>
                                  <i className='bi bi-trash'></i>
                                </button>
                            </div>
                        </li>
                    )
                })
               }
            </ul>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Transactions
