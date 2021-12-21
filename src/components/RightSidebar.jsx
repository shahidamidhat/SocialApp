import {
    Link,
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    makeStyles,
    Typography,
    Divider,
  } from "@material-ui/core";
  import { AvatarGroup } from "@material-ui/lab";
  
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: "#555",
    },
    link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
    },
  }));
  
  const Rightbar = () => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup max={4} style={{ marginBottom: 20 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.hivisasa.com/1200/It9Rrm02rE20.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i.pinimg.com/736x/82/09/e5/8209e55e7515b1dea0132b59ddeafe1a.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://th.bing.com/th/id/OIP.Bt86cFV63I4JaLKFhk6sPwHaEK?pid=ImgDet&rs=1"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/736x/82/09/e5/8209e55e7515b1dea0132b59ddeafe1a.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/736x/82/09/e5/8209e55e7515b1dea0132b59ddeafe1a.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>
          Gallery
        </Typography>
        <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.swSHCBPakxTBbErj8dGyrgHaEo?pid=ImgDet&rs=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.Cl_5Jp99SFiVcA2qRrghbAHaFt?pid=ImgDet&rs=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.DzldsMCAGavxK6HGPBdJlAHaDe?pid=ImgDet&rs=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.qIG84VZ_0Qb9AgGYpJeG2wHaEK?pid=ImgDet&rs=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.NLuSp1TYiK2HxmoX59oh1QHaE8?pid=ImgDet&rs=1"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://th.bing.com/th/id/OIP.Giq4LHH-oe6iyUVsPVGzTgHaE7?pid=ImgDet&w=960&h=639&rs=1"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
          Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Music
        </Link>
        <Divider flexItem style={{marginBottom:5}}/>
        <Link href="#" className={classes.link} variant="body2">
          Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Life
        </Link>
      </Container>
    );
  };
  
  export default Rightbar;