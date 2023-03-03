
import React, { useEffect ,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Flex, Box,Card,Heading, Text,Button} from "rebass";
import { Label, Input } from '@rebass/forms'
import { getGenersFetch, getSongsFetch, selectGeners, selectMessage, selectSongs,setAddStart,setUpdateStart } from '../../redux/reducers/songs.reducer';
    import { StyledAddSong } from './AddSong.styled'
    export default function AddSong() {
        const {id} =  useParams();
        const dispatch = useDispatch();
        const navigator = useNavigate();
        const message =  useSelector(selectMessage);
        const geners = useSelector(selectGeners);

        const [song,setSong] = useState({
         title:"",
         album:"",
         artist:"",
         gener:""
        })
        useEffect(()=>{
            if(message!="")
             navigator("/");
          },[message]);
          useEffect(()=>{
            dispatch(getGenersFetch());
          },[dispatch]);
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
    <select onChange={(e)=>setSong({...song,gener:e.target.selectedOptions[0].value})}>
    <option disabled  hidden>Select geners</option>
    {geners.data && geners.data.map((g,i)=><option value={g} key={i}>{g}</option>)}
 </select>
 </Box>

 <Button onClick={()=>{dispatch(setAddStart({body:song}));}} backgroundColor="#3b99df"    mr={2}>Add</Button>
         </StyledAddSong> 
     )
    }
            