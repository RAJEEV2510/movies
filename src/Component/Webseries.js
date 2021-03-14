import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import SearchIcon from '@material-ui/icons/Search';
import './Movies.css'
import Webserie from './Webserie'
import CustomPagination from './CustomPagination'

function Webseries() {
    const [page,setPage]=useState(1)
    const [movies,setMovies]=useState()
    const [numberOfPages,setNumberOfPages]=useState();
    const [type,setType]=useState(0);
    const [searchText,setsearchText]=useState("")
    useEffect(()=>{

        
        fetch(`https://myappsmovie.herokuapp.com/webseries/api/${page}`).then(res=>res.json()).then((data)=>{
            setMovies(data.result)
            setNumberOfPages(data.totalpages)
        })

    },[page])

    const searchApi=()=>{


        axios.post("https://myappsmovie.herokuapp.com/webseries/search",{
            search:searchText
        }).then((data)=>{
            console.log(data.data)
            setMovies(data.data.result)
            setNumberOfPages(0)
            })


    }

   const againSearch=()=>{
       fetch(`https://myappsmovie.herokuapp.com/webseries/api/${page}`).then(res=>res.json()).then((data)=>{


        setMovies(data.result)
        setNumberOfPages(data.totalpages)
        })

 
    }


    return (
        <>
        
        <div style={{padding:"20px"}}>
            <input className="searchtext" type="text" placeholder="Movie Search Engine" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value)
                searchApi();
                if(e.target.value==="")
                {
                        againSearch()
                }
               }}>
              
             </input>
                  
            <div className="trending"  >
                {movies?movies.map((movie,index)=>{
                   
                    return (
                    
                        <Webserie key={index} poster={movie.Movie_image_url} title={movie.Movie_name} 
                            id={movie.id}
                            movie_desc={movie.Movie_desc}     
                            movie={movie}
                        ></Webserie>
                    )


                }):<>
               
                  <div class="container">
          
                     </div>
                </>
                }
  
            </div>
         {numberOfPages>1?
            <CustomPagination setPage={setPage} numberOfPages={numberOfPages}></CustomPagination>
           :""}
          </div>
        </>
    )
}

export default Webseries
