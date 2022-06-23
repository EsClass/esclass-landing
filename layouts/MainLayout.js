import React from "react";
import {} from "@mui/material";
import Head from "next/head";

import { makeStyles } from "@mui/styles";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "../components/Toolbar";
import { Home } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    color: "black",
  },
  button: {
    background: "blue",
    color: "white",
    marginTop: "-2%",
  },
});

function MainLayout({ active, title, description, children }) {
  const classes = useStyles();

  const routes = [
    {
      href: "/",
      icon: <Home />,
      label: "About",
      style:{display:"none"}
    
    },
    {
      href: "",
      icon: <Home />,
      label: "Solution",
      button:"",
      style:{display:"none"},
    },
    {
      href: "",
      icon: <Home />,
      label: "Pricings",
      button:"",
      style:{display:"none"},
    },
    {
      href: "",
      icon: <Home />,
      label: "Contact Us",
      button:"",
      style:{display:"none"},
    },



  ];
  return (
    <div  >
      <Head>
        <title> {title} | EsClass</title>
        <meta property="og:title" content={title | "EsClass"} />
        <meta
          property="og:description"
          content={
            description ||
            "EsClass for lecturer and student "
          }
        />
      </Head>
      <Toolbar active={active} routes={routes} logo="/img/Logo2.png" />

      {children}
    </div>
  );
}

export default MainLayout;
