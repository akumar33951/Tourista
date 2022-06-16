import React from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LocalGasStation, Message, TramRounded } from '@material-ui/icons';
import { render } from '@testing-library/react';
import { ButtonBase } from '@material-ui/core';
import SideBar from  './SideBar';

const CryptoJS = require("crypto-js");


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//let classes = useStyles();

export default class SignUp extends React.Component {
  login(event) {
    if(this.state?.formData?.password){
      var hash = CryptoJS.MD5(this.state.formData.password);
      this.state.formData.password = hash.toString(CryptoJS.enc.Hex);
    }
    console.log(this.state.formData);
    let self = this;
    console.log(self);
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3000/place/update_place",
      data: this.state.formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);

        if (response.data.success === true)
        {
            alert("Place is updated successfuly")
            //self.props.history.push('/ViewData');
        }
        else
        {
          alert("Something Wrong has happen");
        }

      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }
  constructor() {
    super();
    this.state = {
      formData: {
        userId: "",
        password: ""
      }
    }
  }
  onChange(e) {
    this.state.formData[e.target.name] = e.target.value.trim();
    e.preventDefault();
  }
  render() {
    return (
        <>
        <SideBar />
        <div style={{alignItems: 'center'}}>
            <h1>Update Places in database</h1>

        </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div /* className={classes.paper} */>
          <form /* className={classes.form} */ noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="pname"
              label="pname"
              name="pname"
              autoComplete="pname"
              onChange={this.onChange.bind(this)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cid"
              label="new cid"
              type="cid"
              id="cid"
              onChange={this.onChange.bind(this)}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="location"
              label="new location"
              type="location"
              id="location"
              onChange={this.onChange.bind(this)}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="metro"
              label="new metro"
              type="metro"
              id="metro"
              onChange={this.onChange.bind(this)}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="summary"
              label="new summary"
              type="summary"
              id="summary"
              onChange={this.onChange.bind(this)}
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="p_description"
              label="new p_description"
              type="p_description"
              id="p_description"
              onChange={this.onChange.bind(this)}
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.login.bind(this)}
            /* className={classes.submit} */
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
      </>
    );
  }
}
