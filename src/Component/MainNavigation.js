import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {useHistory} from 'react-router-dom'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MovieIcon from '@material-ui/icons/Movie';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    bottom:0,
    backgroundColor:"white",
    zIndex:100
 
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history=useHistory();
  useEffect(() => {
   

    if(value==0)
    {
        history.push('/trending')
    }
    else if(value==1)
    {
        history.push('/movies')

    }

    else if(value==2)
    {

        history.push("/webseries")
    }
    
    else{

        history.push('/contact')
    }
  }, [value])
    

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon></LocalMoviesIcon>} />
      <BottomNavigationAction label="Web series" icon={<MovieIcon></MovieIcon>} />
      <BottomNavigationAction label="Request Movie" icon={<ContactMailIcon></ContactMailIcon>} />

    </BottomNavigation>
  );
}
