import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from '@material-ui/core'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { useState } from 'react';

const useStyles = makeStyles((theme)=>({
    toolbar :{
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg : {
        display : "block",
        [theme.breakpoints.up("sm")] : {
            display : "none"
        }
    },
    logoSm : {
        display : "none",
        [theme.breakpoints.up("sm")] : {
            display : "block"
        }
    },
    search : {
        display:"flex",
        alignItems:"center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: "50%",
        [theme.breakpoints.down("sm")] : {
            display : (props)=>props.search ? "flex" : "none",
            width:'70%'
        }
    },
    input : {
        Color:"white",
        marginLeft: theme.spacing(1.5)
    },
    icons : {
        display:"flex",
        alignItems: "center",
        [theme.breakpoints.down("sm")] : {
            display : (props)=>props.search ? "none" : "flex",
        }
    },
    icon :{
        marginLeft : theme.spacing(3),
        cursor : "pointer"
    },
    searchicon:{
        [theme.breakpoints.up("sm")] : {
            display : "none"
        }
    },
    cancel :{
        marginLeft: theme.spacing(5),
        [theme.breakpoints.up('sm')]:{
            display : "none"
        }
    }
}));

function Navbar() {
  const [search,setSearch] = useState(false);
  const classes = useStyles({search});
  
  return (
    <div className="Navbar">
      <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h6' className={classes.logoLg}>
                SOCIAL
            </Typography>
            <Typography variant='h6'className={classes.logoSm}>
                BE SOCIAL
            </Typography>
            <div className={classes.search}>
                <SearchRoundedIcon/>
                <InputBase className={classes.input} placeholder="Search here"/>
                <CancelRoundedIcon className={classes.cancel} onClick={()=> setSearch(false)}/>
            </div>
            {<div className={classes.icons}>
                <SearchRoundedIcon className={classes.searchicon} onClick={()=>setSearch(true)}/>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsRoundedIcon className={classes.icon}/>
                </Badge>
                <Badge badgeContent={2} color="secondary">
                    <ChatRoundedIcon className={classes.icon}/>
                </Badge>              
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"  className={classes.icon}/>
            </div>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;