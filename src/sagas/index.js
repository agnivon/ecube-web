import { put, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { actionTypes } from '../actions';

function httpFetch(url) {
    return axios.get(url)
        .then(response => response.data)
    /* .catch(err => console.log(err.message)); */
}

function* fetchMovies(action) {
    const endpoints = action.payload.endpoints;
    const actionBase = actionTypes.MOVIES;
    try {
        yield put({ type: actionBase.FETCH_PENDING });
        const data = {};
        for (let endpoint of endpoints) {
            const { url, category } = endpoint;
            data[category] = yield call(httpFetch, url);
        }
        yield put({ type: actionBase.FETCH_SUCCESS, data: data });
    } catch (e) {
        yield put({ type: actionBase.FETCH_FAILURE, message: e.message });
    }
}

function* fetchEvents(action) {
    const actionBase = actionTypes.EVENTS;
    try {
        yield put({ type: actionBase.FETCH_PENDING });
        const data = yield call(httpFetch, action.payload.url);
        yield put({ type: actionBase.FETCH_SUCCESS, data: data });
    } catch (e) {
        yield put({ type: actionBase.FETCH_FAILURE, message: e.message });
    }
}

function* watchFetchMovies() {
    yield takeEvery([
        actionTypes.MOVIES.FETCH_REQUESTED,
    ], fetchMovies);
}

function* watchFetchEvents() {
    yield takeEvery([
        actionTypes.EVENTS.FETCH_REQUESTED,
    ], fetchEvents);
}


export default function* rootSaga() {
    yield all([
        watchFetchMovies(),
        watchFetchEvents()
    ]);
}