import React from 'react'
import './Movies.css'
import { Badge } from '@material-ui/core'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core/';


function Webserie({ poster, title, movie_desc, movie }) {
    console.log(movie)

    var subtitle;
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className="media">

                <img src={poster} onClick={openModal}></img>
                <button onClick={openModal} style={{
                    backgroundColor: "green", height: "35px", border: "none", marginTop: "10px", cursor: 'pointer', color: "white",
                    marginBottom:"10px",
                    borderRadius: "20px"
                }}>
                    <Link to="/downloadseasons" style={{ textDecoration: "none",color:"white" }} onClick={() => {

                        var arr = [];

                        if (movie.season1 != "") {
                            arr.push(movie.season1);
                        }
                        if (movie.season2 != "") {
                            arr.push(movie.season2);
                        } if (movie.season3 != "") {
                            arr.push(movie.season3);
                        } if (movie.season4 != "") {
                            arr.push(movie.season4);
                        } if (movie.season5 != "") {
                            arr.push(movie.season5);
                        } if (movie.season6 != "") {
                            arr.push(movie.season6);
                        } if (movie.season7 != "") {
                            arr.push(movie.season7);
                        }

                        if (movie.season8 != "") {
                            arr.push(movie.season8);
                        } if (movie.season9 != "") {
                            arr.push(movie.season9);
                        } if (movie.season10 != "") {
                            arr.push(movie.season10);
                        }

                        localStorage.setItem("movie", JSON.stringify(movie));
                        localStorage.setItem("download_url", JSON.stringify(arr));

                    }}>
                        Download  Seasons
                        </Link>
                </button>


                <b className="title">{title}</b>
                {movie_desc}

            </div>


        </>
    )
}

export default Webserie
