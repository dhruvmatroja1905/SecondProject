import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../Component/API/jsonapi';
import { ACTIONTYPE } from '../Redux/Action/Constant/action-type';
import { setUser, fetchUserFailure, fetchUserDataRequest } from '../Redux/Action/Action/profileAction';
import axios from 'axios';

function* fetchProductsSaga(action) {
  const { payload: userId } = action;

  try {

    const response = yield call(axios.get, 'http://localhost:5000/business-information');



    console.log('API data from saga:', response.data);

    // Dispatch action to store fetched data
    yield put(setUser(response.data));
  } catch (error) {
    console.error('Error fetching user data:', error);
    yield put(fetchUserFailure(error.message));
  }
}

export function* watchFetchProducts() {
  // Listen for FETCH_USERS_REQUEST action and call fetchProductsSaga
  yield takeEvery(ACTIONTYPE.FETCH_USERS_REQUEST, fetchProductsSaga);
}
