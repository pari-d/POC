import { takeLatest, put, all } from 'redux-saga/effects'

export function* fetchTravellerList() {
    const url = "https://api.jsonbin.io/b/5f350767bf24ad02bef166e7";
    let result = yield fetch(url).then((response) => {
        return response.json();
    });
    if (result.length > 0) {
        yield put({
            type: 'FETCH_TRAVELLER_LIST_SUCCESS',
            payload: result
        })
    }
    else {
        yield put({
            type: 'FETCH_TRAVELLER_LIST_FAILURE',
            error: result.message
        })
    }
}

export function* watchFetchTravellerList() {
    yield takeLatest('FETCH_TRAVELLER_LIST', fetchTravellerList);
}

// COMBINE WATCHERS:

export default function* rootSaga() {
    yield all([
        watchFetchTravellerList()
    ])
}