import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const img = "/img/background01.png";
import React from "react";
import Animator from "./Animator";
const useStyles = makeStyles({
  root: {
    "& .MuiGrid-container": {
      minHeight: "100vh",
      padding: "30vh 10vw",
      flexDirection:"column",
      ["@media (min-width:1200px)"]:{
       flexDirection:"row"
              },
    },
    "& .MuiButton-outlined": {
      background: "#fff",
      color: "#00cb4b",
      width: "200px",
      marginTop: 20,
      height:"48px",
      fontSize:12,
     border:"none",
      borderRadius:"20px"
    },
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    marginTop:100,
  },
});
function Section() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid spacing={12} container>
       
        <Grid item  xs={12} md={6} display="flex" flexDirection="column">
            <div className="right">
          <Typography variant="h4" fontWeight="700" lineHeight="1" >
            About esClass
          </Typography>
          <Typography color="#00cb4b" sx={{marginBottom:3}} >what we`re all about</Typography>
          <Typography lineHeight="1.5" variant="h6">
            Apps work well in dispensing news and events taking place in school,
            thus reduce the trouble of having to announce updates individually.
            School apps are just the best medium when you have to make
            announcements regarding the course, class timings, schedule, and
            school policies{" "}
          </Typography>
          <Button variant="outlined">
            Learn more
            <ArrowForward fontSize="small"/>
          </Button>
          </div>
        </Grid>
        
        
        <Grid item xs={12} md={6}display="flex" justifyContent="center">
            <div className="left">
          <img src="/img/video.jpg" width="100%"  />
          </div>
        </Grid>
      
      </Grid>
    </div>
  );
}

export default Section;
