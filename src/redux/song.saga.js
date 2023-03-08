import {call,all, fork,put,takeEvery, takeLatest} from "redux-saga/effects";
import {Requests} from "../services/requests.js";
import { getGenersSuccess, getSongsError, getSongsFetch, getSongsSuccess, getStatsSuccess, setAddSuccess, setDeleteSuccess, setUpdateSuccess } from "./reducers/songs.reducer";
function* workGetSongFetch(){
    try{
  const songs = yield call(Requests.getSongs);
  yield put(getSongsSuccess(songs.data));
}catch(e){
    yield put(getSongsError(e.response.data));
}
}
function* workGetGenersFetch(){
    try{
        const geners = yield call(Requests.getGeners);
        yield put(getGenersSuccess(geners.data));
    }catch(e){
        yield put(getSongsError(e.response.data));
    }
  }
  function* workGetStatsFetch(){
    try{
    const stats = yield call(Requests.getStats);
    yield put(getStatsSuccess(stats.data));
}catch(e){
    yield put(getSongsError(e.response.data));
}
  }
  function* workAddSong({payload}){
    try{
    const songs = yield call(Requests.addSong,payload.body);
    yield put(setAddSuccess(songs.data));
}catch(e){
    yield put(getSongsError(e.response.data));
}
  }
  function* workUpdateSong({payload}){
    try{
      const geners = yield call(Requests.updateSong,payload.id,payload.body);
      yield put(setUpdateSuccess(geners.data));
    }catch(e){
        yield put(getSongsError(e.response.data));
    }
    }
    function* workDeleteSong({payload}){
        try{
      const stats = yield call(Requests.deleteSong,payload.id);
      yield put(setDeleteSuccess({...stats.data,_id:payload.id}));
      yield put(getSongsFetch());
    }catch(e){
        yield put(getSongsError(e.response.data));
    }
    }
  function* onFetchSongSaga(){
    yield takeLatest("songs/getSongsFetch",workGetSongFetch)
  }
  function* onFetchGenersSaga(){
    yield takeLatest("songs/getGenersFetch",workGetGenersFetch)
  }
  function* onFetchStatsSaga(){
    yield takeLatest("songs/getStatsFetch",workGetStatsFetch)
  }
  function* onDeleteStartSaga(){
    yield takeEvery("songs/setDeleteStart",workDeleteSong)
  }
  function*  onAddStartSaga(){
    yield takeEvery("songs/setAddStart",workAddSong)
  }
  function*  onUpdateStart(){
    yield takeEvery("songs/setUpdateStart",workUpdateSong)
  }
function* finalSaga(){
    yield all([
        fork(onAddStartSaga),
        fork(onDeleteStartSaga),
        fork(onUpdateStart),
        fork(onFetchGenersSaga),
        fork(onFetchSongSaga),
        fork(onFetchStatsSaga)
    ])  
}
export default finalSaga;