import { Category } from '@material-ui/icons'
import axios from 'axios'
import React from 'react'
import './Genres.css'
const data=[
    "all", "action","comedy","thriller","horror","romance","adventure","sci-fi",
]


function Genres({setMovies,setNumberOfPages,setwait,wait,page,setPage}) {

  
   
    return (
        <>
        <div className="category">
            {data.map((type)=>{

              return(
                  <>
                    <CategoryButton setPage={setPage} type={type} page={page}  setMovies={setMovies} setNumberOfPages={setNumberOfPages} wait={wait} setwait={setwait}> </CategoryButton>         
                  </>
              )  
            })}
          
        </div>
            
        </>
    )
}

export default Genres


function CategoryButton({type,setMovies,setNumberOfPages,setwait,wait,page,setPage}){

 
    const Category=(type)=>{
      
        fetch(`https://myappsmovie.herokuapp.com/category/${type}/${page}`).then((res)=>res.json()).then((data)=>{
    
        
             
            setMovies(data.result)
            setNumberOfPages(data.totalpages)
            setwait(false)
            setPage(1);
        })
        }
     
    return (

        <>

                <div onClick={()=>{
                      
                        Category(type);
                        setwait(true);
                        localStorage.setItem("fetch",type);
                                            
                    }}>
                    {type}
                </div>


        </>
    )

}

    
