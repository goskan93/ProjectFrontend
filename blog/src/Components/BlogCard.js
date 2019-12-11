import React, {useState, useRef, useEffect, createRef, Fragment} from 'react';
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
  const actionsItems = [
    {
      itemName: 'Facebook',
      itemIcon: <FacebookIcon style={{color:'#4267B2'}}/>,
      itemLabel: 'facebook',
      itemUrl: `www.facebook.com/${blog.Facebook}/`    
    },
    {
      itemName: 'Instagram',
      itemIcon: <InstagramIcon style={{color:'#8a3ab9'}}/>,
      itemLabel: 'instagram',
      itemUrl: `www.instagram.com/${blog.Instagram}/`
    },
    {
      itemName: 'Youtube',
      itemIcon: <YouTubeIcon style={{color:'#FF0000'}}/>,
      itemLabel: 'youtube',
      itemUrl: `www.youtube.com/${blog.Youtube}/`
    },
    {
      itemName: 'Website',
      itemIcon: <LanguageIcon style={{color:'#008B00'}}/>,
      itemLabel: 'website',
      itemUrl: `${blog.Website}`
    },
  ]

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return(
    <Card>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
        <Grid item xs={5} >
          <CardMedia style={{height:160}} image={logo} title={blog.Name}/>
        </Grid>
        <Grid item xs={7} >
          <CardHeader title={blog.Name} style={{paddingTop:16, paddingBottom:8, fontSize:'1rem'}}/>
          <CardContent>
            <Grid container direction="row" alignItems="flex-start" justify="flex-start" spacing={1}>
              {contentItems.map((item, id) => {
                return(
                  <Fragment key={id}>
                    {blog[item.itemName] &&
                      <>
                        <Grid item xs={1}>
                          <CheckIcon/>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="body2" style={{textAlign:"start"}} >{item.itemTitle}</Typography>
                        </Grid>
                      </>
                    }
                  </Fragment>
                )
              })}
            </Grid>
          </CardContent>
          <Divider/>
          <CardActions style={{padding:2}}>
            {actionsItems.map((item, id) => {
              return(
                <Fragment key={id}>
                  {blog[item.itemName] &&
                    <IconButton title={item.itemUrl} onClick={() => window.open(item.itemUrl)}>
                      {item.itemIcon}
                    </IconButton>  
                  }
                </Fragment>
              )
            })}
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
          <Typography style={{textAlign: "start"}}>{blog.About}</Typography>
        </CardContent>
      </Collapse>
    </Card>

  )

}
export default BlogCard;

const contentItems = [
  {
    itemName: 'flaOrganizeTrips',
    itemTitle: 'Organize Trips'
  },
  {
    itemName: 'flaTravelWithAnimals',
    itemTitle: 'Travel with animals'
  },
  {
    itemName: 'flaTravelWithChildren',
    itemTitle: 'Travel with children'
  },
]

