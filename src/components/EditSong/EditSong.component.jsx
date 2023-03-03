
    import React, { useEffect ,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Flex, Box,Card,Heading, Text,Button} from "rebass";
import { Label, Input } from '@rebass/forms'
import { getGenersFetch, getSongsFetch, selectGeners, selectMessage, selectSongs,setUpdateStart } from '../../redux/reducers/songs.reducer';
import { StyledAddSong } from '../AddSong/AddSong.styled';
    export default function EditSong() {
       const {id} =  useParams();
       const dispatch = useDispatch();
       const navigator = useNavigate();
       const message = useSelector(selectMessage);
       const geners = useSelector(selectGeners);
       const [song,setSong] = useState({
        title:"",
        album:"",
        artist:"",
        gener:""
       })
       const songList = useSelector(selectSongs);
       useEffect(()=>{
        if(message!="")
         navigator("/");
      },[message]);
       useEffect(()=>{
        dispatch(getSongsFetch());
        dispatch(getGenersFetch());
      },[dispatch]);

       useEffect(()=>{
        console.log(songList);
           const song_temp = songList.data && songList.data.find(s=>s._id == id);
           console.log(song_temp)
           if(song_temp){
             setSong({
                title:song_temp.title,
                album:song_temp.album,
                artist:song_temp.artist,
                gener:song_temp.gener
             })
           }
    },[songList]);
    return (
        <StyledAddSong> 
                  <Box>
             <Label htmlFor='text'>Song Title</Label>
   <Input
     name='title'
     type='text'
     onChange={(e)=>setSong({...song,title:e.target.value})}
     value={song.title}
     placeholder='Enter your song title'
   />
 </Box>
<Box>
             <Label htmlFor='email'>Song Artist</Label>
   <Input
     name='email'
     type='email'
     onChange={(e)=>setSong({...song,artist:e.target.value})}
     value={song.artist}
     placeholder='Enter the artist name'
   />
 </Box>
 <Box>
             <Label htmlFor='email'>Song Album</Label>
   <Input
     name='album'
     onChange={(e)=>setSong({...song,album:e.target.value})}
     type='text'
     value={song.album}
     placeholder='Enter the album name'
   />
 </Box>
 <Box>
    <select  onChange={(e)=>setSong({...song,gener:e.target.selectedOptions[0].value})}>
    <option disabled  hidden>Select geners</option>
    {geners.data && geners.data.map((g,i)=><option selected={g==song.gener} value={g} key={i}>{g}</option>)}
 </select>
 </Box>

<Button onClick={()=>{dispatch(setUpdateStart({body:song,id:id}));}} backgroundColor="#3b99df"   mr={2}>Update</Button>
        </StyledAddSong> 
    )
    }
            