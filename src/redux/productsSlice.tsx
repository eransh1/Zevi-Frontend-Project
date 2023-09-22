import { createSlice } from "@reduxjs/toolkit";
import { ProductsType } from "../types/types";

let initialState:ProductsType[]=[]

const productSlice=createSlice({
    name:"products",
    initialState,
reducers:{
    setProducts:(state,action)=>{
 return action.payload
    },

}
})
export const {setProducts}=productSlice.actions
export default productSlice.reducer