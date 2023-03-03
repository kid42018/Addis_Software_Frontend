import songsReducer from "./reducers/songs.reducer.js"
import {configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import songSaga from "./song.saga";
const saga = createSagaMiddleWare();
export default configureStore({
reducer: {
songs:songsReducer,
},
middleware:[saga]
});
saga.run(songSaga)
