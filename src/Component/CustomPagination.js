import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {ThemeProvider,createMuiTheme} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
function CustomPagination({setPage,numberOfPages}) {

    const classes = useStyles();
    return (
        <>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"130px"}} className={classes.root}>

                   
                    <Pagination
                    hideNextButton
                    hidePrevButton
                    color="primary" count={numberOfPages}   onChange={(e)=>{
                             setPage(e.target.textContent)
                             window.scroll(0,0)
                         }}></Pagination>
                   
            </div>
        </>
    )
}

export default CustomPagination
