import React from 'react';
import axios from 'axios';
import '../../App.css';
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
const CryptoJS = require("crypto-js");
// import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3001/">
        Tourista
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

export class SignUp extends React.Component {
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
      url: "http://localhost:3000/user/login",
      data: this.state.formData,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response.data);

        if (response.data.success === true)
        {
            self.props.history.push('/view-data');
        }
        else
        {
          alert("Incorrect UserId or Password");
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div /* className={classes.paper} */>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form /* className={classes.form} */ noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userId"
              label="UserId"
              name="userId"
              autoComplete="userId"
              onChange={this.onChange.bind(this)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
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
              Sign In
          </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

//export default withStyles(useStyles, { withTheme: true })(SignUp)