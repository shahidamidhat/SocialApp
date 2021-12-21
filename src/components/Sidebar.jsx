import { Container, makeStyles, Typography} from '@material-ui/core'
import {Apps, Camera, Collections, ExitToApp, Group, Home,List,MusicNote,Person, Settings, Shop, VideoCall} from '@material-ui/icons';


const useStyles = makeStyles((theme)=>({
  container:{
    height:"100vh",
    color:"white",
    position:"sticky",
    top:0,
    paddingTop: theme.spacing(9),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      backgroundColor: "white",
      borderRight: "1px solid darkgrey",
      color: "black"
    }
  },
  item:{
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]:{
      marginBottom: theme.spacing(3),
      cursor: "pointer"
    },
    
  },
  icon : {
    [theme.breakpoints.up("sm")]:{
      fontSize: "20px",
      marginRight:theme.spacing(2)
    }
  },
  text : {
    fontWeight: "300px",
    [theme.breakpoints.down("sm")]:{
      display:"none"
    },
    '&:hover' : {
      borderBottom:'1px solid darkgrey'
    }
    
  }
}));

function Sidebar () {
  const classes = useStyles();
  return (
    <Container className = {classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className = {classes.text}>Home Page</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon}/>
        <Typography className = {classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon}/>
        <Typography className = {classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <Camera className={classes.icon}/>
        <Typography className = {classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <VideoCall className={classes.icon}/>
        <Typography className = {classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <Apps className={classes.icon}/>
        <Typography className = {classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <MusicNote className={classes.icon}/>
        <Typography className = {classes.text}>Music</Typography>
      </div>
      <div className={classes.item}>
        <Group className={classes.icon}/>
        <Typography className = {classes.text}>Groups</Typography>
      </div>
      <div className={classes.item}>
        <Collections className={classes.icon}/>
        <Typography className = {classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Shop className={classes.icon}/>
        <Typography className = {classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon}/>
        <Typography className = {classes.text}>Settings</Typography>
      </div><div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className = {classes.text}>Log Out</Typography>
      </div>

      
    </Container>
  );
}

export default Sidebar ;