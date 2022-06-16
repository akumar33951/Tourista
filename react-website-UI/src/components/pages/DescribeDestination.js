import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../DescribeDestination.css';
import  Carousel  from '../Carousel';
import Navbar from '../Navbar';

class DescribeDestination extends React.Component {

    render()
    {
     let destination = this.props.location.state;
     console.log(destination);

     const { classes } = this.props;


    return (
      <>
      <Navbar />
      <div>
        <div className="header">
          <h1 style={{fontSize: 50}}>{destination.pname.toUpperCase()}</h1>

        </div>
        <div className="Carousel">
          <Carousel destination = {destination}></Carousel>
        </div>
        <div className="description">
          <h2>  About:</h2>
          <p className="desc_p"> {destination.summary}.</p>
          <p className="desc_p"> {destination.p_description}.</p>
          <p >
            <h3 className="desc_h">Location: {destination.location}</h3>
            <h3 className="desc_h">Nearest Metro Station: {destination.metro}</h3>
          </p>
        </div>
      </div>
      </>
  );
    }
  } 
  export default  DescribeDestination; //withStyles(styles, { withTheme: true })(DescribeDestination);