import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name : "counterSlice",
    initialState : {count : 0},
    reducers :{
        //define action
        increment : (state)=>{
            state.count++
        },
        decremant : (state)=>{
            state.count--
        },
        reset : (state)=>{
            return {...state,count:0}
        },
        incrementByamount : (state,valueFromComponent)=>{
            state.count += +valueFromComponent.payload  //The + before the valueFromComponent is uesd to make the type of payload to integer(the value of the payload is originally a string)
        }

    }
})

export const {increment,decremant,reset,incrementByamount} = counterSlice.actions
export default counterSlice.reducer