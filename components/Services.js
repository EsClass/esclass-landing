import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const img = "/img/background02.png";
const content = [
  {
    url: "/img/img1.png",
    title: "Student",
    subtitle:
      "Have access to all class management Tools and services including",
    list1: "Mark class attendance",
    list2: "E - Library and learning resource",
    list3: "Assignments and submissions",
    list4: "Take online assessments",
    color: "#00cb4b",
  },
  {
    url: "/img/img2.png",
    title: "Lecturer",
    subtitle:
      "Have access to all class management Tools and services including",
    list1: "Attendance Verification",
    list2: "Time table management",
    list3: "Assignments and submissions",
    list4: "Organizing CBT assessments ",
    color: "black",
  },
  {
    url: "/img/img3.png",
    title: "School",
    subtitle:
      "Have access to all class management Tools and services including",
    list1: "Student management dashboard",
    list2: "Teachers management Dashboard",
    list3: "Build an E - Library",
    list4: "Generate School Report",
    color: "#007fff",
  },
];
const useStyles = makeStyles({
  root: {
    marginTop: 150,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",

    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",

    "& .MuiCard-root": {
      alignItems: "flex-start",
      display: "flex ",
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",

    marginTop: 20,
    ["@media (min-width:1200px)"]: {
      flexDirection: "row",
      marginTop: 40,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
 
  },
  down:{
    marginTop: 60, textAlign: "center"
  },
});
function Services() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" fontWeight="700" textAlign="center">
        Our services
      </Typography>

      <div className={classes.content}>
        {content.map((cur, index) => (
          <Card
            root
            key={index}
            sx={{
              maxWidth: 340,
              marginTop: 5,
              height: "460px",
              borderRadius: 5,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image={cur.url}
                sx={{ marginTop: "-9%" }}
              />
              <CardContent sx={{ margin: 2 }}>
                <Typography
                  variant="h5"
                  fontWeight="800"
                  lineHeight="3"
                  color={cur.color}
                >
                  {cur.title}
                </Typography>
                <Typography>{cur.subtitle}</Typography>
                <Typography lineHeight="2.1" color={cur.color}>
                  <li>{cur.list1}</li>
                  <li>{cur.list2}</li>
                  <li>{cur.list3}</li>
                  <li>{cur.list4}</li>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      <div className={classes.down}>
        {" "}
        <Button variant="outlined" sx={{ color: "#00bc4b", width: "200px",borderRadius:10,  fontWeight:"700" }}>
          How to get started
        </Button>
      </div>
    </div>
  );
}

export default Services;
