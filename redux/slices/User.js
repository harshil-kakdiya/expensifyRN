import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState = {
  user: null,
  userLoading: false
}

export const userSlice = createSlice({
  name: 'User',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setuser: (state, action)=>{
      state.user=action.payload;
    },
    setuserLoading: (state, action)=>{
      state.userLoading=action.payload;
    }
  },
})

export const { setuser, setuserLoading } = userSlice.actions


export default userSlice.reducer;