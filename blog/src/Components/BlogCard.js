import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';
import logo from '../images/images.jpeg'

function BlogCard(props){
  const {blog} = props
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Card>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
        <Grid item xs={5}>
          <CardMedia
            style={{height:127, padding:20}}
            image={logo}
            title={blog.Name}
          />
        </Grid>
        <Grid item xs={7}>
          <CardHeader
            title={blog.Name}
            style={{paddingTop:16, paddingBottom:8}}
          />
          <CardContent>
            <Grid container direction="row" alignItems="flex-start" justify="flex-start" alignContent="flex-start" spacing={1}>
              {blog.flaOrganizeTrips &&
                <>
                  <Grid item xs={1}>
                    <CheckIcon/>
                  </Grid>
                  <Grid item xs={5} alignContent="flex-start">
                    <Typography variant="body2" style={{textAlign:"start"}} >Organize Trips</Typography>
                  </Grid>
                </>
              }
              {blog.flaTravelWithAnimals &&
                <>
                  <Grid item xs={1}>
                    <CheckIcon/>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="body2" style={{textAlign: "start"}}>Travel with animals</Typography>
                  </Grid>
                </>
              }
              {blog.flaTravelWithChildren &&
                <>
                  <Grid item xs={1}>
                    <CheckIcon/>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="body2" style={{textAlign: "start"}}>Travel with children</Typography>
                  </Grid>
                </>
              }
            </Grid>
          </CardContent>
          <Divider/>
          <CardActions style={{padding:2}}>
            {blog.Facebook &&
              <IconButton aria-label="facebook">
                <FacebookIcon style={{color:'#4267B2'}}/>
              </IconButton>            
            }
            {blog.Instagram &&
              <IconButton aria-label="instagram">
                <InstagramIcon style={{color:'#8a3ab9'}}/>
              </IconButton>            
            }
            {blog.Youtube &&
              <IconButton aria-label="youtube">
                <YouTubeIcon style={{color:'#FF0000'}}/>
              </IconButton>            
            }
            {blog.Youtube &&
              <IconButton aria-label="website">
                <LanguageIcon style={{color:'#008B00'}}/>
              </IconButton>            
            }
            {blog.About &&
              <IconButton
                style={{marginLeft: 'auto'}}
                onClick={handleExpandClick}
                aria-label="show more"
              >
                {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon />}
              </IconButton>            
            }
          </CardActions>
        </Grid>
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{padding:16}}>
          <Typography style={{textAlign: "start"}}>
            {blog.About}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

  )

}
export default BlogCard;

