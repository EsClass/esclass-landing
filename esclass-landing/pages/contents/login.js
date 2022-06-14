import { Search } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Form from "../../components/Form";
const useStyles = makeStyles({
  root: {
    "& .MuiBox-root": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      ["@media (min-width:1200px)"]: {
        alignContent: "center",
      },
    },

    "& .MuiGrid-item": {
      display: "none",
      flexDirection: "column",

      marginTop: "50px",
      margin: "50px",
      width: "50%",
      ["@media (min-width:1200px)"]: {
        display: "flex",
      },
    },
    "& .MuiGrid-container": {
      display: "flex",
      flexDirection: "column",
      margin: "56px",
      alignItems: "center",
      ["@media (min-width:1200px)"]: {
        alignItems: "flex-start",
      },
    },
  },
});
function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box root>
        <Grid item>
          <Typography
            variant="h5"
            color="#999"
            sx={{ fontWeight: "800", lineHeight: "1.5" }}
          >
            Engage your student without a lot of <br /> clever management
            tecnologies
            <br />
            esclass has to offer
          </Typography>
          <Typography
            variant="p1"
            color="#888"
            sx={{ lineHeight: "2", marginTop: "40px", fontSize: "16px" }}
          >
            <ul>
              <li>E-attendance</li>
              <li>CBT-test</li>
              <li>Assignments and submissions</li>
              <li>E - library and learning resource</li>
            </ul>
          </Typography>
          <img
            src="/img/EsClass.png"
            alt="img"
            width="500px"
            height="500px"
            style={{
              marginLeft: "120px",

              marginTop: "-40%",
            }}
          />
          <img
            src="/img/EsClass-2.png"
            width="200px"
            height="300px"
            style={{ position: "absolute", bottom: "0", left: "0" }}
          />
        </Grid>
        <Grid container>
          <Typography
            variant="h5"
            color="#007fff"
            sx={{ fontWeight: "700", fontSize: "19px" }}
          >
            <img src="/img/Logo.png" height="20px" />
            /Leturer
          </Typography>
          <Grid sx={{ marginTop: "120px" }}>
            <Typography variant="h6"  color="#999" fontWeight="700">Welcome back!</Typography>
            <Form />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default SignIn;
