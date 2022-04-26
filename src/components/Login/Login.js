import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGoogle } from '@fortawesome/free-solid-svg-icons'
import GoogleIcon from '@mui/icons-material/Google';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from './firebase.Config.js';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Button, Grid, Input,Item } from '@mui/material';

import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}





const Login = () => {



    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,

        name: '',
        
        email: '',
        password: '',
        ConfirmPassword: ''
    })
    const provider = new firebase.auth.GoogleAuthProvider();



    const history = useHistory();
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email,photoURL } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                console.log(signedInUser);
                history.replace(from);

            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage, errorCode);
            });
    }

    const handleBlur = (e) => {

        let isFieldValid = true;
        let isPasswordMatch = true;
        // console.log(e.target.name, e.target.value);
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isEmailValid)
        }
       
        if (e.target.name === 'password' ) {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            // if(isFieldValid) {
            //     var password.value === confirmPassword;
            // }
            // else{
            //     alert('password dose match');
            // }
        }
        if (e.target.name === 'ConfirmPassword' ) {
            var confirmPassword = e.target.value;
            
        }
         

        

        if (isFieldValid) {

            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password)

        if (newUser && user.name && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...res.user };

                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch(error => {

                    const newUserInfo = { ...user };

                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);

                });

        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...res.user };

                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', res.user);


                })
                .catch((error) => {
                    const newUserInfo = { ...user };

                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

        }

        e.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(function () {

            console.log('User Updated successfully')
        }).catch(function (error) {

            console.log(error)
        });

    }

    return (

       
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box   onSubmit={handleSubmit}
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                { newUser && 
                  <TextField
                    onBlur={handleBlur}
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                  /> }
                </Grid>
               
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
        
               <input  style={{width:'200px'}}  type="submit" class="btn btn-primary" value={newUser ? 'Sign Up' : 'Sign In'} />

                </Grid>
              </Grid>
              
              
            </Box>
          </Box>
<br></br>
          <input style={{}} type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
             <label style={{ color: 'green' }} htmlFor="newUser">New User Sign up </label>
          <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleGoogleSignIn}
              >
               <GoogleIcon/> Sign Up With Google
              </Button>
        </Container>
  
        
//              <div style={{  width:'700px' ,marginLeft:'20%'} }  >



// <h2  style={{ color: 'black',marginTop: '20%' ,textAlign:'center' ,fontSize:'40px' }}>𝙇𝙤𝙜𝙞𝙣 𝘼𝙘𝙘𝙤𝙪𝙣𝙩</h2>
//     <Container class="mt-5 d-flex " style={{marginLeft:'10%'}} >
// <Row>

// <Col class="md-5">


// <form  style={{backgroundColor:'whiteSmoke'}} onSubmit={handleSubmit} >
//   <div class="form-group">
//   { newUser && <label for="exampleInputEmail1">Email address</label> &&  <input type="text" id="login" class="form-control" onBlur={handleBlur} name="name" placeholder="Input Name" required /> }
    
//     <TextField id="outlined-basic" type="email" class="form-control"  placeholder="Enter email"/>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-check">
//   <br></br>
//    {/* {newUser && <input id="password" class="fadeIn third" type="password" onBlur={handleBlur} name="ConfirmPassword" placeholder="confirmPassword" />} */}
//                <input  style={{ marginLeft:'14%',width:'130px'}}  type="submit" class="btn btn-primary" value={newUser ? 'Sign Up' : 'Sign In'} />
//   </div>
  
// </form >
//          <input style={{ marginLeft:'20%'}} type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
//              <label style={{ color: 'green' }} htmlFor="newUser">New User Sign up </label>
 
 
//              <p style={{ color: 'red' }}>{user.error}</p>
//              {user.success && <p style={{ color: 'green' }}> User {newUser ? 'create' : 'Logged In'} Success </p>}

//              <br></br>
             
//              <p style={{ marginLeft:'25%'}}>Or sign with</p>
//             < Button style={{ marginLeft:'12%'}}  class="fadeIn fourth" onClick={handleGoogleSignIn} variant="success">  <FontAwesomeIcon icon={faCoffee} /> Sign In With Google</Button>

            
// </Col>

// <Col class="md-5" style={{backgroundColor:'orange'}} >

//         <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_q5pk6p1k.json" 
//             background="transparent" 
//                 speed="1" 
//                 style={{width: '400px', height: '400px'}} 
//                 loop 
//                 autoplay>
//         </lottie-player>



       


// </Col>

// </Row>


//     </Container>

//              </div>

      
    );
};
    

export default Login;