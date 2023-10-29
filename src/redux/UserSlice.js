import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
  },
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
    updateUser(state, action) {
      let temp = state.data;
      temp.map((item, index) => {
        if (index == action.payload.index) {
          item.Address = action.payload.Address;
          item.Email = action.payload.Email;
          item.MobileNumber = action.payload.MobileNumber;
          item.Name = action.payload.Name;
        }
      });
      state.data = temp;
    },
    deleteUser(state, action) {
      let temp = state.data;
      let final = temp.filter((item, index) => {
        return index != action.payload;
      });

      state.data = final;
    },
  },
});

export const {addUser, updateUser,deleteUser} = UserSlice.actions;
export default UserSlice.reducer;
