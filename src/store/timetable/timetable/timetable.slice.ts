import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ITimeTableItem} from "../../../global/interfaces";

interface IInitialState {
  subjects: ITimeTableItem[],
  isEditing: boolean,
}

const initialState: IInitialState = {
  subjects: [],
  isEditing: false
}

export const timeTable = createSlice({
  name: 'timeTable',
  initialState,
  reducers: {
    addSubject: (state, action: PayloadAction<ITimeTableItem>) => {
      state.subjects.push(action.payload)
    },
    editSubject: (state, action: PayloadAction<ITimeTableItem>) => {
      const currentItem = action.payload
      const editingItem = state.subjects.find(subject => subject.id === currentItem.id);
      state.subjects = state.subjects.map(subject => subject === editingItem ? {...currentItem} : subject);
    },
    deleteSubject: (state, action: PayloadAction<{id: string}>) => {
      state.subjects = state.subjects.filter(subject => subject.id !== action.payload.id);
    }
  }
})

export const timeTableReducer = timeTable.reducer
export const timeTableActions = timeTable.actions