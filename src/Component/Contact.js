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
            <div style={{display:"flex",margin:"30px",flexDirection:"column",alignItems:"center"}}>
                  <div >
                        
                   
                        <a href="https://t.me/freemovieswebseries123"> JOIN ON TELEGRAM FOR LATEST MOVIE</a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                     
                        
                  </div>
                    <img style={{height:"100px",width:"100px",borderRadius:"50%"}} src="data:image/jpeg;base64,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"  ></img>              

            </div>    

        </>
    )
}

export default Contact
