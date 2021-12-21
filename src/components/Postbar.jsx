import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography, CardActions, Button} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  media:{
    height:260,
    [theme.breakpoints.down("sm")]:{
      height:150,
    }
  },
  card: {
    marginBottom: theme.spacing(5)
  }
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
        className={classes.media}
        image="https://www.gardeningknowhow.com/wp-content/uploads/2020/04/nc-fruit-trees-1024x768.jpg"
        title="post"/>
        <CardContent>
          <Typography gutterBottom variant="h5" >My Journey</Typography>
          <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias libero at officiis consequatur numquam. Hic asperiores amet, labore quaerat harum cupiditate eum, veritatis consequatur quasi impedit dolorem! Minus, id dolorum.</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size = "small" color="primary">Share</Button>
        <Button size = "small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Post;