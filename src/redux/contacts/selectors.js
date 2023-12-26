export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
