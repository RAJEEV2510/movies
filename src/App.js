//378254c21386316ba52f54e868671b83
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './Component/Header';
import SimpleBottomNavigation from './Component/MainNavigation';
import Container from '@material-ui/core/Container';
import Trending from './Component/Trending';
import Movies from './Component/Movies';
import Search from './Component/Search'
import Webseries from './Component/Webseries'
import DownloadSeasons from './Component/DownloadSeasons';
import Contact from './Component/Contact';

function App() {
  return (
    <>

      <Header></Header> 
 
       <div className="App">
     
        <BrowserRouter>


            <Switch>

              <Route path="/trending">
                <Trending></Trending>
                 </Route>
              <Route path="/movies">
                <Movies></Movies>
              </Route>
              <Route path="/webseries">
                <Webseries></Webseries>
              </Route>
              <Route path="/search">
                <Search></Search>
              </Route>
              <Route path="/downloadseasons" >
                <DownloadSeasons></DownloadSeasons>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
            </Switch>


          <SimpleBottomNavigation></SimpleBottomNavigation>
        </BrowserRouter>


      </div>
     

    </>
  );
}

export default App;
