import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import SearchIcon from '@material-ui/icons/Search';
import './Movies.css'

import CustomPagination from './CustomPagination'
function Trending() {
    const [page,setPage]=useState(1)
    const [movies,setMovies]=useState()
    const [numberOfPages,setNumberOfPages]=useState();
    const [type,setType]=useState(0);
    const [searchText,setsearchText]=useState("")
    useEffect(()=>{

        
        fetch(`https://myappsmovie.herokuapp.com/movie/api/${page}`).then(res=>res.json()).then((data)=>{


        setMovies(data.result)
        setNumberOfPages(data.totalpages)
        })

    },[page])

    const searchApi=()=>{

        console.log("seacrh api")
        console.log(searchText)
        axios.post("https://myappsmovie.herokuapp.com/search",{
            search:searchText
        }).then((data)=>{
            console.log(data.data)
            setMovies(data.data.result)
            setNumberOfPages(0)
            })


    }

   const againSearch=()=>{
       fetch(`https://myappsmovie.herokuapp.com/movie/api/${page}`).then(res=>res.json()).then((data)=>{


        setMovies(data.result)
        setNumberOfPages(data.totalpages)
        })

 
    }


    return (
        <>
        
        <div style={{padding:"10px"}}>
            <input className="searchtext" type="text" placeholder="Movie Search Engine" value={searchText} onChange={(e)=>{
                setsearchText(e.target.value)
                searchApi();
                if(e.target.value==="")
                {
                        againSearch()
                }
            }}>
              
            </input>
         
         
                           <div className="trending">
                {movies?movies.map((movie,index)=>{
                   
                    return (
                    
                        <Movie key={index} poster={movie.Movie_image_url} title={movie.Movie_name} 
                            id={movie.id}
                            movie_desc={movie.Movie_desc}     
                            Movie_download_url={movie.Movie_download_url}
                        ></Movie>
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

export default Trending
