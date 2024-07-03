import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  addContactOperation,
  deleteContactOperation,
  fetchContactsOperation,
} from "./operations";
import { logOutOperation } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsOperation.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactsOperation.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContactsOperation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactOperation.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContactOperation.fulfilled, (state, action) => {
        state.items.push({ ...action.payload, id: nanoid() });
        state.loading = false;
      })
      .addCase(addContactOperation.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteContactOperation.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContactOperation.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteContactOperation.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logOutOperation.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
