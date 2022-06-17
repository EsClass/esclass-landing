import { AccountCircle,  ArrowDropDown,  Email, Password, Phone } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { AuthLayouts1 } from '../../layouts/AuthLayouts'
const useStyles = makeStyles({
  root: {
    "& form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "6vh",
      "& .MuiButton-outlined": {
        background: "#00bc4b",
        color: "#fff",
        width: "29vw",
        borderRadius: 30,
        margin: 7,
      },
      "& 	.MuiFormControl-root": {
        width: "80vw",
      
        margin: 10,
        ["@media (min-width:1200px)"]:{
          width: "29vw",
        },
      },
    },
  },
});
function signup() {
  const classes = useStyles();
  return (
 <AuthLayouts1
 title="Create an account"
 >
   <div className={classes.root}>
        <form>
          <FormControl root variant="outlined">
            <InputLabel htmlFor="outlined-adornment-text">Full name</InputLabel>
            <OutlinedInput 
              sx={{ borderRadius: "30px",height:"7vh",margin:"0"}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                </InputAdornment>
              }
              label="Full name"
              type="text"
            />
          </FormControl>

          <FormControl root variant="outlined">
            <InputLabel htmlFor="outlined-adornment-number">
              Phone number
            </InputLabel>
            <OutlinedInput
           sx={{ borderRadius: "30px",height:"7vh",margin:"0"}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Phone />
                  </IconButton>
                </InputAdornment>
              }
              label="Phone number"
              type="number"
            />
          </FormControl>

<FormControl root variant="outlined">
            <InputLabel htmlFor="outlined-adornment-text">
             School
            </InputLabel>
            <OutlinedInput
      sx={{ borderRadius: "30px",height:"7vh",margin:"0"}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <ArrowDropDown />
                  </IconButton>
                </InputAdornment>
              }
              label="School"
              type="text"
            />
          </FormControl>
          <FormControl root variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">
              Email
            </InputLabel>
            <OutlinedInput
              sx={{ borderRadius: "30px",height:"7vh",margin:"0"}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Email/>
                  </IconButton>
                </InputAdornment>
              }
              label="Email"
              type="email"
            />
          </FormControl>
          <FormControl root variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              sx={{ borderRadius: "30px",height:"7vh",margin:"0"}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Password />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              type="password"
            />
          </FormControl>
          
          
          <Button variant="outlined">SignIn</Button>
         
          <a href="/contents/login" style={{ color: "#00bc4b" }}>
           Login
          </a>
        </form>
      </div>  
 </AuthLayouts1>
  )
}

export default signup