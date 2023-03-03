import { createSlice } from '@reduxjs/toolkit';
        const songsSlice = createSlice({
          name: 'songs',
          initialState: {
            list:[],
            stats:null,
            geners:[],
            isLoading:true,
            error:"",
            message:""
          },
          reducers: {
              setError:(state,action)=>{
                state.error = "";
              },
              setMessage:(state,action)=>{
                state.message = "";
              },
              setDeleteStart:(state,action)=>{
                state.isLoading = true;
              },
              setDeleteSuccess:(state,action)=>{
                state.message = action.payload.message;
                state.isLoading = false;
              }, 
               setAddStart:(state,action)=>{
                state.isLoading = false;
               },
               setAddSuccess:(state,action)=>{
                state.message =  action.payload.message;
                state.isLoading = false;
               },
               setUpdateStart:(state,action)=>{
                state.isLoading = true;
               },
               setUpdateSuccess:(state,action)=>{
                state.message = "updated succesfully";
                state.isLoading = false;
               },
                getSongsFetch:(state,action) => {
                  state.isLoading = true;
                },
                getGenersFetch:(state,action) => {
                  state.isLoading = true;
                },
                getStatsFetch:(state,action) => {
                  state.isLoading = true;
                },
                getSongsSuccess:(state,action) => {
                  state.list = action.payload;
                  state.isLoading = false;
                },
                getGenersSuccess:(state,action) => {
                  state.geners = action.payload;
                  state.isLoading = false;
                },
                getStatsSuccess:(state,action) => {
                  state.stats = action.payload;
                  state.isLoading = false;
                },
                getSongsError:(state,action) => {  
                  state.error = action.payload.message
                  state.isLoading = false;
                },
          }
        })
        export const {setError,setMessage, setAddStart,setAddSuccess,setDeleteStart,setDeleteSuccess,setUpdateStart,setUpdateSuccess, getSongsFetch,getSongsError,getSongsSuccess,getGenersFetch,getStatsFetch,getGenersSuccess,getStatsSuccess} = songsSlice.actions;
        export const selectSongs = (state) => state.songs.list;
        export const selectError = (state) => state.songs.error;
        export const selectMessage = (state) => state.songs.message;
        export const selectStats = (state) => state.songs.stats;
        export const selectGeners = (state) => state.songs.geners;
        export const selectIsLoading = (state) => state.songs.isLoading;
        export default songsSlice.reducer;
