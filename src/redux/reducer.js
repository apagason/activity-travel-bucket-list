import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addBucketReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addBuckets: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove Buckets
    removeBuckets: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update Buckets
    updateBuckets: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeBuckets: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addBuckets, removeBuckets, updateBuckets, completeBuckets } =
  addBucketReducer.actions;
export const reducer = addBucketReducer.reducer;
