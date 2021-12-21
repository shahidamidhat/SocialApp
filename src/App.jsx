import {Grid, makeStyles} from '@material-ui/core'
import Add from './components/Addpost';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import Rightbar from './components/RightSidebar';

const useStyles = makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down("sm")]:{
      display:"none",
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar/>
      <Grid container>
        <Grid item sm={2} xs={2}> 
          <Sidebar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed/>
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar/>
        </Grid>
      </Grid>
      <Add/>
    </div>
  );
}

export default App;
