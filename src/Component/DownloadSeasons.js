import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core/';
import './DownloadSeasons.css';
import { Link } from 'react-router-dom';
function DownloadSeasons() {

    const [movie, setmovie] = useState();
    const [seasons, setseasons] = useState([]);
    useEffect(() => {

        setseasons(JSON.parse(localStorage.getItem('download_url')));
        setmovie(JSON.parse(localStorage.getItem('movie')));


    }, [])


    return (
        <>

            {seasons ?
                <div className="download_url" style={{ marginTop: "100px", paddingBottom: "200px" }}>
                    <Button variant="contained" color="primary">
                        <a href="/" style={{textDecoration:"none",color:"white"}}> back</a>
                    </Button>
                    <div className="movie_name">
                        {movie ? movie.Movie_name : ""}
                    </div>
                    <div className="download_image">
                        {movie ?
                            <>
                                <img src={movie.Movie_image_url} />
                            </>
                            : ""
                        }
                        <div className="download_desc">
                            {movie ? movie.Movie_desc : ""}

                        </div>
                        <div className="download_category">
                            {movie ? <>Category &emsp; {movie.category}</> : ""}

                        </div>
                        <div>
                            {movie?<><h3 style={{color:"green"}}>Rating &emsp; {movie.rating}</h3></>:""}
                        </div>
                        <div className="season_download">
                            {seasons ? seasons.map((season, index) => {

                                return (
                                    <>
                                        <div className="download_season_button">
                                            <Button variant="contained" color="secondary">
                                                <a href={season} style={{ textDecoration: "none", color: "white" }}>
                                                    Download Season  {index + 1}
                                                </a>
                                            </Button>
                                        </div>
                                    </>
                                )
                            }) : ""

                            }


                        </div>

                    </div>


                </div> : ""}
        </>
    )
}

export default DownloadSeasons
