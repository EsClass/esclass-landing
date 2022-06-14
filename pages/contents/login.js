import { Search } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Form from "../../components/Form";
import { AuthLayouts1 } from "../../layouts/AuthLayouts";
const useStyles = makeStyles({
  root: {
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
    <AuthLayouts1>
      <Form />
    </AuthLayouts1>
  );
}

export default SignIn;
