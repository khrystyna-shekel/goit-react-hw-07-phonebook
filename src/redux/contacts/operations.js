import axios from 'axios';
import { fetchingData } from './contactsSlice';

axios.defaults.baseURL = 'https://658b2744ba789a96223880b2.mockapi.io';

export const fetchContactsThunk = () => async dispatch => {
  try {
    // dispatch(isPending());
    const { data } = await axios.get('contacts');
    dispatch(fetchingData(data));
  } catch (error) {
    // dispatch(isError(error.message));
  }
};
