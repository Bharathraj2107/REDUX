import  {createSlice } from "@reduxjs/toolkit";
import { addTransaction, allTransaction, deleteTransaction, UpdateTransaction } from "../Actions/ExpenseAction";
const expenseSlice=createSlice({
    name:"expense",
    initialState:[],
    extraReducers:(builder)=>{
        builder.addCase(addTransaction.fulfilled,(state,action)=>{})
                .addCase(allTransaction.fulfilled,(state,action)=>{})
                .addCase(UpdateTransaction.fulfilled,(state,action)=>{})
                .addCase(deleteTransaction.fulfilled,(state,action)=>{})
    }
})
export default expenseSlice