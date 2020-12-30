import api from '../utils/api';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current user's profile
export const getCurrentProfile = () => async (dispacth) => {
  try {
    const res = await api.get('/profile/me');

    dispacth({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispacth({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
