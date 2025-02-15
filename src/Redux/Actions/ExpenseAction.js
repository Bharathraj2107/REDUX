import { createAsyncThunk } from "@reduxjs/toolkit";

//action const and methods

//adding transaction
export const addTransaction=createAsyncThunk("transaction/add",async(transaction)=>{
    //logic
})
//read all transaction
export const allTransaction=createAsyncThunk("transaction/all",async()=>{
    //logic
})
//edit transaction
export const UpdateTransaction=createAsyncThunk("transaction/Update",async(transaction,id)=>{
    //logic
})
//delete transaction
export const deleteTransaction=createAsyncThunk("transaction/delete",async(id)=>{
    //logic
})