import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player';
const Test = () => {
    const [data, setData] = useState('')
    // console.log("data" + data)

   const fetchData = async()=>{
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/album_tracks/',
        params: {
          id: '3IBcauSj5M2A6lTeffJzdv',
          offset: '0',
          limit: '100'
        },
        headers: {
          'X-RapidAPI-Key': '5b70bf86b2msh86f42590686dacfp13f815jsn52e684fc109f',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          setData(response.data.data.album.tracks.items[0].track.uri)
      } catch (error) {
          console.error(error);
      }
   }

   useEffect(()=>{
    fetchData()
   },[])
    return (
        <div>Test
        {
            data && <li >{data}</li>
        }
        <ReactPlayer url="d465e72cf8573ced392a" controls playing />
        
        </div>
    )
}

export default Test