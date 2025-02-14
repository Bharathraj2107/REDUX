import React ,{ useState } from 'react'
import Display from '../Component/Display'
function Home() {
  const[balance,setBalance]=useState(0);
  const[income,setIncome]=useState(0);
  const[expense,setExpense]=useState(0);
  return (
    <div className="container">
       <Display balance={balance} income={income} expense={expense}/>
    </div>
  )
}

export default Home
