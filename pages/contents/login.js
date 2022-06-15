import { Search } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Form from "../../components/Form";
import { AuthLayouts1 } from "../../layouts/AuthLayouts";
const useStyles = makeStyles({});
function SignIn() {
  const classes = useStyles();
  return (
    <AuthLayouts1>
      <Form />
    </AuthLayouts1>
  );
}

export default SignIn;
