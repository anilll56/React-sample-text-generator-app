import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchTexts=createAsyncThunk('texts/getTexts' , async (paras ,format) => {
    const res= await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`);
    console.log('res.data', res.data);
    return res.data;    
})


export const textSlice=createSlice({
    id:1,
    name:'anil',
    initialState:{
        texts:[],
        paras: 10,
        format: "text",
    },

    reducers:{
        setParas: (state, action) => {
            state.paras = action.payload;
        },

    },
    extraReducers:{
        [fetchTexts.fulfilled]:(state,action)=>{
           state.items=action.payload;
        }
    }
});

export const { setParas} = textSlice.actions;
export default textSlice.reducer;