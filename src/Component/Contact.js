import React from 'react'
import { Button } from '@material-ui/core/';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function Contact() {


    const [Name, setName] = React.useState("")
    const notify = () => toast("We added soon this request");
    const requestMovies=()=>{
        console.log("HELLO WORLD")

        var url=`https://api.telegram.org/bot1734489529:AAGHn65vPERAAmSnZMsLYcRxtCyK8dGwMq8/sendMessage?chat_id=-1001328492675&text=Admin please Add this movie  ${Name}`
        axios.get(url).then((data)=>{
            setName('')
            notify()
        })
     
    }
    return (
        <>
            <div className="request-form" style={{marginTop:"100px",width:"100%",textAlign:"center"}}>
                    <h4>
                        Have a TV show or movie you'd like to see on EntertainmentFlix? Let us know about it below.
                        <br></br>
                        After your request we will add within 5 minutes
                        
                    </h4>
                    <br></br>
                    <ToastContainer />
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
