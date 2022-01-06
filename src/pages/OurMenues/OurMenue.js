import { Box } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const OurMenue = ({menue}) => {
    const {strArea, strMeal, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5, strInstructions} = menue
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        
    <Card sx={{ maxWidth:{xs:345, sm:300, md:345 }, m:2}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: grey[900] }} aria-label="recipe">
                CH
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title={strMeal}
            subheader={ `Area ${strArea}`}
        />
        <CardMedia
            component="img"
            height="194"
            image={strMealThumb}
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
               {strInstructions.slice(0,200)}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph>Major Ingredients:</Typography>
            <Typography paragraph>
                <span style={{margin:'5px', fontWeight:'600'}}>{strIngredient1} </span>
                <span style={{margin:'5px', fontWeight:'600'}}>{strIngredient2} </span>
                <span style={{margin:'5px', fontWeight:'600'}}>{strIngredient3} </span>
                <span style={{margin:'5px', fontWeight:'600'}}>{strIngredient4} </span>
                <span style={{margin:'5px', fontWeight:'600'}}>{strIngredient5} </span>
               
            </Typography>
            
            <Typography>
                {strInstructions}
            </Typography>
            </CardContent>
        </Collapse>
    </Card>
    );
};

export default OurMenue;