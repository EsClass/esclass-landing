import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { minHeight } from "@mui/system";
import Animator from '../components/Animator'
import React from "react";
const img = "/img/background.png";
const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%", 
   height: "100vh",
    display: "flex",
    "& .MuiGrid-container": {
      display: "flex",
      justifyContent: "center",
    },
    '& .left':{
      display:"none",
      ["@media (min-width:1200px)"]:{
        display:"block",
              },
    },
    "& .MuiGrid-item": {
  
      left: "0",
      position: "absolute",
      padding: "10vh 5vw",
      lineHeight: "6",
      ["@media (min-width:1200px)"]:{
        left: "0",
        position: "absolute",
        padding: "30vh 10vw",
        lineHeight: "6",
              },
    },

  },
});
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
     
        <Grid item xs={7}>
        <Animator variant="slide" direction="right" delay={800} timeout={1000}>
          <div>
          <Typography variant="h3" color="#fff" fontWeight="700">
            Smart solution for <span style={{ color: "#f90" }}>Classroom</span>{" "}
            managemant And organization
          </Typography>
          
          <Typography color="#fff" sx={{ marginTop: 2 }}>
            EsClass comes with a features to help you connect your student with
            the right learning
          </Typography>
          <Button
            variant="outlined"
            sx={{
              background: "#fff",
              borderRadius: "20px",
              color: "#00cb4b",
              fontWeight:"900",
             height:"50px",
             width:"150px",
            }}
          >
            Get started
          </Button>
          </div>
          </Animator>
        </Grid>
       
      
        <Animator variant="zoom"  delay={800} timeout={1000} > 
        <Grid xs={5} className="left" sx={{ position: "absolute", top: "0", right: "0" }}>
         
          <img src="/img/art.png" height="60%" width="100%" />
         
        </Grid>
        </Animator>
      
      </Grid>
    </div>
  );
}

export default Header;
