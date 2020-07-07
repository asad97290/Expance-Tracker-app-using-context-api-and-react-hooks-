import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const AddTransaction = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)
    
    const onSubmit = (e) => {
      e.preventDefault()
      const newTransaction={
        id:Math.floor(Math.random()*100000000),
        text,
        amount:+amount
      }
      addTransaction(newTransaction)
    
    }
    return (
        <>
          <h3>Add Transaction</h3>  
          <form onSubmit={onSubmit}>
            <div>
            <label>Text</label>
            <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter some thing..."/>
            </div>
            <div>
            <label>Amount<br/>(negative - expance and positive - income )</label>
            <input type="number" id="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter some thing..."/>
            </div>
            <button className="btn">Add Transaction</button>
          </form>
        </>
    )
}
