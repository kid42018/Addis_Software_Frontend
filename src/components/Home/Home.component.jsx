
    import React, { useEffect } from 'react'
    import { Flex, Box,Card,Heading, Text,Button } from "rebass";
    import { StyledHome } from './Home.styled'
    import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch, selectSongs, setDeleteStart } from '../../redux/reducers/songs.reducer';
import { useNavigate } from 'react-router-dom';
    export default function Home() {
     const songList = useSelector(selectSongs);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     useEffect(()=>{
       dispatch(getSongsFetch());
     },[dispatch]);
     useEffect(()=>{
       console.log(songList)
     },[songList])
    return (
        <StyledHome> 
         {songList.data && songList.data.length == 0 && <h1>No song found</h1>}
            {songList.data &&
                songList.data.map((s,i)=><Card key={i}  sx={{
                    p: 1,
                    width:"100%",
                    justifyContent:"center",
                    display: "flex",
                    borderRadius: 5,
                    flexDirection:"column",
                    boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                  }} width={256}>
              <Heading className='txt'>Song: <span className='value'>{s.title}</span></Heading>
              <Text
             className='txt'>
              Album: <span className='value'>{s.album}</span>
            </Text>
            <Text
             className='txt'>
              Gener:  <span className='value'>{s.gener}</span>
            </Text>
            <Text
             className='txt'>
              Artist:  <span className='value'>{s.artist}</span>
            </Text>
            <div className='btn-cont'>
            <Button onClick={()=>navigate(`/${s._id}`)} color={"white"} backgroundColor="#3b99df" mr={2}>Edit</Button>
            <Button onClick={()=>dispatch(setDeleteStart({id:s._id}))} color={"white"} backgroundColor="#f56358"   mr={2}>Delete</Button>
            </div>
           
            </Card>)
            }

        </StyledHome> 
    )
    }
            