import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState,
  reducers: {
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

export const { deleteContact, changeFilter, addContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
