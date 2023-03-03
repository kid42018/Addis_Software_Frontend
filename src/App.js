import "./App.css";
import React, { useEffect } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
BrowserRouter,
Routes,
Route,
Navigate,
useNavigate
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {getGenersFetch, getSongsFetch, getStatsFetch, selectError, selectGeners, selectIsLoading, selectMessage, selectSongs, selectStats, setAddStart, setError, setMessage } from "./redux/reducers/songs.reducer";
import Header from "./components/Header/Header.component";
import Loading from "./components/Loading/Loading.component";
import Home from "./components/Home/Home.component";
import EditSong from "./components/EditSong/EditSong.component";
import AddSong from "./components/AddSong/AddSong.component";
import StatList from "./components/StatList/StatList.component";
function App() {
  const isLoading =  useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(getSongsFetch());
  },[dispatch])
  useEffect(()=>{
    if(message!="")
    toast.success(message)
    dispatch(setMessage(""))
  },[message]);
  useEffect(()=>{
    if(error!="")
    toast.error(error);
    dispatch(setError(""))
  },[error]);
return (
 <BrowserRouter>
        <Header />
        {isLoading && <Loading />}
   
        <ToastContainer />
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<EditSong />} />
            <Route path="/add" element={<AddSong />} />
            <Route path="/stat" element={<StatList />} />
            <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        </BrowserRouter>
       
);
}
export default App;