import React from 'react'
import './Movies.css'
import {Badge} from '@material-ui/core'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { makeStyles } from '@material-ui/core/';
import {Button} from '@material-ui/core/';

function Movie({ poster, title, movie_desc,Movie_download_url}) {
  
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
                  

            <div style={{height:"400px",display:'flex',flexDirection:"column"}}>
                 <img src={poster} onClick={openModal} ></img>

                 <p>
                      {movie_desc}
                    </p>   
                    <br></br>
                 <Button variant="contained" color="secondary">
                      <a href={Movie_download_url} style={{textDecoration:"none",color:"white"}}>Download</a>
                </Button>
                
        
          </div>         
        </Modal>
        </>
    )
}

export default Movie
