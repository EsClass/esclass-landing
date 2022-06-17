import { Email, Password, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AuthLayouts1 } from "../../layouts/AuthLayouts";
const useStyles = makeStyles({
  root: {
    "& form": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20vh",
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
        },},
    },
  },
});
function SignIn() {
  const classes = useStyles();
  return (
    <AuthLayouts1 
    title="Welcome Back!"
    >
      <div className={classes.root}>
        <form>
          <FormControl root variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              sx={{ borderRadius: "30px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <Email />
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
              sx={{ borderRadius: "30px" }}
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
          <a href="">Forgotten password?</a>
          <a href="/contents/signup" style={{ color: "#00bc4b" }}>
            Create new account
          </a>
        </form>
      </div>
    </AuthLayouts1>
  );
}

export default SignIn;
