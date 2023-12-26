import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState,
  reducers: {
    fetchingData: (state, { payload }) => {
      state.contacts.items = payload;
      // state.contacts.isLoading = false;
    },

    // isPending: (state, { payload }) => {
    //   state.contacts.isLoading = true;
    //   state.contacts.error = null;
    // },

    // isError: (state, { payload }) => {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = payload;
    // },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
  },
});

export const {
  deleteContact,
  changeFilter,
  addContact,
  fetchingData,
  // isPending,
  // isError,
} = contactsSlice.actions;
export default contactsSlice.reducer;
