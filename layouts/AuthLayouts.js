import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  left: {
    padding: "10vh 7vw",
    position: "relative",
    background: "#f7f7f7",
    height: "100vh",
    "& ul": {
      paddingLeft: 15,
    },
    "& .imageLayer": {
      overflowY: "hidden",
      height: "100%",
      width: "100%",
      position: "absolute",
      bottom: 0,
      left: 0,
      overflowX: "visible",
    },
    "& .compImage": {
      position: "absolute",
      right: "-10%",
      bottom: "15%",
      height: "40%",
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContents: "space-between",
    padding: "10vh 7vw",
    "& .logo": {
      height: 40,
      display: "block",
      marginRight: 10,
    },
  },
});
export const AuthLayouts1 = ({ children, type }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div className={classes.left}>
          <Typography
            color="#777"
            sx={{
              typography: { xl: "h4", lg: "h5" },
              lineHeight: { md: "1.5", lg: "1.8", xl: 2 },
              fontWeight: "800 !important",
              marginBottom: { lg: 5, xl: 7 },
            }}
          >
            Engage your student without a lot of clever management tecnologies
            esclass has to offer
          </Typography>
          <Typography
            variant="p1"
            color="#888"
            sx={{
              lineHeight: {
                lg: 2,
                xl: 2.5,
              },
              marginTop: "40px",
              fontSize: "16px",
            }}
          >
            <ul>
              <li>E-attendance</li>
              <li>CBT-test</li>
              <li>Assignments and submissions</li>
              <li>E - library and learning resource</li>
            </ul>
          </Typography>
          <img src="/img/EsClass.png" alt="img" className="compImage" />
          <div className="imageLayer">
            <img
              src="/img/EsClass-2.png"
              width="200px"
              style={{
                width: "40%",
                position: "absolute",
                bottom: "-5%",
                left: "-5%",
              }}
            />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.right}>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <img src="/img/Logo.png" className="logo" />
            <Typography
              variant="h5"
              color="#007fff"
              sx={{ fontWeight: "700", fontSize: 28, marginTop: 1.2 }}
            >
              / Lecturer
            </Typography>
          </Box>
          {children}
        </div>
      </Grid>
    </Grid>
  );
};
