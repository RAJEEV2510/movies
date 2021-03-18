import React from 'react'
import { Button } from '@material-ui/core/';
import axios from 'axios'

function Contact() {

    const [Name, setName] = React.useState("")

    const requestMovies=()=>{
        console.log("HELLO WORLD")
        fetch("https://myappsmovie.herokuapp.com/request/movie",{
            method:'post',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:Name})
        }).then((res)=>res.json()).then((data)=>{console.log(data)});
     
    }
    return (
        <>
            <div className="request-form" style={{marginTop:"100px",width:"100%",textAlign:"center"}}>
                    <h3>
                        Have a TV show or movie you'd like to see on EntertainmentFlix? Let us know about it below.
                        <br></br>
                        After your request we will add within 5 minutes
                        
                    </h3>
                    <br></br>
                    <h1>Try Now</h1>
                    <input type="text" value={Name} onChange={(e)=>{
                        
                        setName(e.target.value)
                        
                        }} style={{width:"300px",height:"40px",fontSize:"20px",margin:"20px",marginTop:"20px"}} placeholder="request movies/webseries"></input>
                        <Button variant="contained" color="secondary" onClick={()=>{
                            requestMovies()
                        }}>Request Movies</Button>
            </div>
            
        </>
    )
}

export default Contact
