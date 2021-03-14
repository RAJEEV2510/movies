import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import './Movies.css'
import Genres from './Genres'
import CustomPagination from './CustomPagination'

function Movies() {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState()
    const [numberOfPages, setNumberOfPages] = useState();
    const [selectedGenres,setSelectedGenres]=useState([]);
    const [genres,setGeners]=useState([])
    const [wait ,setwait]=useState(false)    

    useEffect(() => {
        
        const type= localStorage.getItem('fetch');

     
        if(!type)
        {
            console.log("type");
            fetch(`https://myappsmovie.herokuapp.com/category/all/${page}`).then(res=>res.json()).then((data)=>{
        
            setMovies(data.result)
            console.log(data)
            setNumberOfPages(data.totalpages)
        })
    }

    }, [])


    useEffect(()=>{
        const type= localStorage.getItem('fetch');

        console.log(type)
        if(type)
        {
            fetch(`https://myappsmovie.herokuapp.com/category/${type}/${page}`).then(res=>res.json()).then((data)=>{
        
            setMovies(data.result)
         
            setNumberOfPages(data.totalpages)
        })
    }

    },[page])


    return (
        <>
        <Genres setMovies={setMovies} setPage={setPage} setNumberOfPages={setNumberOfPages} wait={wait}   page={page} setwait={setwait}></Genres>
            <div style={{ padding: "10px" }}>
                <div className="trending">
                    {wait==false?
                    <>
                    {movies ? movies.map((movie, index) => {
                        return (
                                             
                        <Movie key={index} poster={movie.Movie_image_url} title={movie.Movie_name} 
                        id={movie.id}
                        movie_desc={movie.Movie_desc}     
                        Movie_download_url={movie.Movie_download_url}
                       ></Movie>

                        )}) : ""}
                      </> :       
                         <div class="container" style={{marginBottom:"100px",marginTop:"100px"}} > </div>
                         }
                </div>

                <CustomPagination setPage={setPage} numberOfPages={numberOfPages}></CustomPagination>

            </div>
        </>
    )
}

export default Movies
