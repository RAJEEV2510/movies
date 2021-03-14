import React from 'react'
import './Movies.css'
import {Badge} from '@material-ui/core'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core/';


function Webserie({ poster, title, movie_desc,movie}) {
    console.log(movie)
  
    var subtitle;
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
       
      // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.

    }
   
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <>
            <div className="media">
            
                <img src={poster} onClick={openModal}></img>
                <Link to="/downloadseasons" style={{textDecoration:"none"}} onClick={()=>{

                    var arr=[];
                   
                        if(movie.season1!="")
                        {
                            arr.push(movie.season1);    
                        }
                        if(movie.season2!="")
                        {
                            arr.push(movie.season2);    
                        }if(movie.season3!="")
                        {
                            arr.push(movie.season3);    
                        }if(movie.season4!="")
                        {
                            arr.push(movie.season4);    
                        }if(movie.season5!="")
                        {
                            arr.push(movie.season5);    
                        }if(movie.season6!="")
                        {
                            arr.push(movie.season6);    
                        }if(movie.season7!="")
                        {
                            arr.push(movie.season7);    
                        }

                        if(movie.season8!="")
                        {
                            arr.push(movie.season8);    
                        }if(movie.season9!="")
                        {
                            arr.push(movie.season9);    
                        }if(movie.season10!="")
                        {
                            arr.push(movie.season10);    
                        }
                   
                        localStorage.setItem("movie",JSON.stringify(movie));
                        localStorage.setItem("download_url",JSON.stringify(arr));

                }}>
                              Download  Seasons
             </Link> 
                 <b className="title">{title}</b>
                 { movie_desc}
            
            </div>
           
            <Modal
              isOpen={modalIsOpen}
             onAfterOpen={afterOpenModal}
             onRequestClose={closeModal}
             style={customStyles}
             contentLabel="Example Modal"
              >
                  

            <div style={{height:"800px",display:'flex',flexDirection:"column",paddingBottom:"20px"}} onClick={openModal}>
                 <img src={poster}   ></img>

                 <p>
                     
                      {movie_desc}
                    </p>   
                    <br></br>
                   
                     <Button variant="contained" color="secondary">
                            {console.log(movie.season1)}
                        
                    
                    </Button>
                    <br></br>
                    {movie.season2!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season2}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 2
                          
                          </a>
                    
                    </Button>:""}
                    {movie.season3!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season3}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 3
                              </a>
                    
                    </Button>:""}
                    {movie.season4!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season4}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 4
                              </a>
                    
                    </Button>:""}
                    {movie.season5!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season5}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 5
                              </a>
                    
                    </Button>:""}
                    {movie.season6!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season6}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 6
                              </a>
                    
                    </Button>:""}
                    {movie.season7!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season7}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 7
                              </a>
                    
                    </Button>:""}
                    {movie.season8!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season8}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 8
                              </a>
                    
                    </Button>:""} 
                    {movie.season9!=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season9}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 9
                              </a>
                    
                    </Button>:""} 
                    {movie.season10=""?
                     <Button variant="contained" color="secondary">
                          <a href={movie.season10}  style={{textDecoration:"none",color:"white"}}>
                              Download
                              Season 10
                              </a>
                    
                    </Button>:""}
                <hr></hr>  
          <div>

          </div>
          </div>         
        </Modal>
        </>
    )
}

export default Webserie
