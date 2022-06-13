import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import { Email, Password, Search } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    "& .MuiButton-outlined": {
      background: "#00bc4b",
      marginTop: "20px",
      border: "none",
      color: "#fff",
      width: "340px",
      height: "40px",
      borderRadius: "30px",
      ["@media (min-width:1200px)"]:{
        width: "400px",
        marginTop: "30px",
      }
    },
    '& .MuiFormControl-root':{
     width:"340px",
     marginTop: "20px",
      ["@media (min-width:1200px)"]:{
        width: "400px",
      },
    }
  },
});
export default function Form() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl root
         
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
          sx={{  borderRadius: "30px",}}
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
        <FormControl root
       
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
              sx={{  borderRadius: "30px",}}
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
        <Typography sx={{ marginTop: "10px" }}>Forgot password?</Typography>
        <a href="" style={{ color: "#00bc4b" }}>
          Create new account
        </a>
        <Grid
          sx={{
            position: "fixed",
            bottom: "0",
            display: "flex",
            margin: "30px",
          }}
        >
          <a
            href=""
            style={{ color: "#00bc4b", margin: "10px", fontSize: "12px" }}
          >
            EsClass for student
          </a>
          <a
            href=""
            style={{ color: "#00bc4b", margin: "10px", fontSize: "12px" }}
          >
            EsClass for university
          </a>
        </Grid>
      </div>
    </Box>
  );
}
