import {
  AppBar,
  Hidden,
  Backdrop,
  IconButton,
  Grow,
  Toolbar,
  Button,
} from "@mui/material";
import { CloseOutlined, Menu } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Link from "next/link";

const useStyles = makeStyles({

  toolbar: {
    display:"flex",
    justifyContent:"space-between",
  
    color: "#fff",
    padding: "0px 20px",
    // borderBottom: "1px solid #ddd",
    transition: "all 0.3s",
    ["@media (min-width : 1200px)"]: {},
    "&.scrolled": {
      boxShadow: "0 5px 5px #0001",
      background: "#00bc4b",
    },
    '& .MuiButton-text:hover':{
      background:"#00cb4c"
    },
    '& .MuiButton-text':{
      color:"#fff"
    }

,
    "& ul": {
      listStyle: "none",
      display: "flex",
      margin: 0,
      marginLeft: "auto",

      "& a": {
        
        display: "flex",
        alignItems: "center",
        padding: "20px 20px",
        textTransform: "capitalize",
        color: "#fff",
        textDecoration: "none",

        "&:hover ,&.active": {
          color: "#f90",
          borderBottom: "6px solid #f90"
        },
      },
    },

    ["@media  (min-width : 1200px)"]: {
      padding: "0px 3vw",
    },
  },
  menu: {
    marginLeft: "auto",
  },
  logo: {
    height: 25,
    transition: "all 0.3s",
    margin: "10px 0",
  },
  drawer: {
    zIndex: 1500,
    background: "#00bc4b",
    position: "fixed",
    top: 0,
    left: 0,
    padding: 10,
    paddingTop: 40,
    width: "100%",
    
    '& .MuiButton-text':{
      width: "100%",
      display: "flex",
      alignItems: "center",
      textTransform: "capitalize",
      color: "#fff ",
      padding: 15,
   
    },
    '& .mobile':{
alignItems:"flex-start"
    },

    "& ul": {
      display: "flex",
      listStyle: "none",
      padding: 0,
      flexDirection: "column",
      "& a": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        textTransform: "capitalize",
        color: "#fff ",
        padding: 15,
      },
      "& .css-i4bv87-MuiSvgIcon-root": {
        color: "inherit",
      },
      "& li ": {
        "& span": {
          paddingLeft: 15,
        },
        "& a:hover , & a:active , & a.active": {
          background: "#f902",
          color: "#999",
          fontWeight: 700,
        },
      },
    },
  },
});

function AppToolbar({ active, routes = [], logo }) {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Drawer = (
    <div className={classes.drawer}>
      <img src={logo} style={{ marginLeft: 10 }} />

      <ul>
        {routes.map((cur) => (
          <li key={cur.href}>
            <Link href={cur.href}>
              <a className={active === cur.label ? "active" : ""}>
                {cur.icon}
                <span>{cur.label}</span>
           
              </a>
            </Link>
          </li>
        ))}
       
      </ul>
      
      
      <div className="Mobile" ><Button variant="text"  > Sign in </Button>
             <Button variant="text"   >Sign Up</Button></div>
      
    </div>
  );
  const watchScrolled = () => {
    const top = document.documentElement.scrollTop;
    if (top > 100) setScrolled(true);
    else setScrolled(false);
  };
  React.useEffect(() => {
    watchScrolled();
    window.addEventListener("scroll", watchScrolled);
  }, []);

  return (
    <AppBar color="transparent" elevation={0}>
      <Hidden lgUp>
        <Backdrop open={menuOpen} onClick={() => setMenuOpen(false)} />
        <Grow in={menuOpen}>{Drawer}</Grow>
      </Hidden>
      <Toolbar
        variant="dense"
        className={[classes.toolbar, scrolled ? "scrolled" : ""].join(" ")}
      >
        <div><img className={classes.logo} src={logo} /></div>
        <Hidden lgUp>
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            className={classes.menu}
          >
            {menuOpen ? <CloseOutlined /> : <Menu />}
          </IconButton>
        </Hidden>

        <Hidden mdDown>
      <div>  <ul>
            {routes.map((cur) => (
            
              <li key={cur.href}>
                <Link href={cur.href}>
                  <a className={active === cur.label ? "active" : ""}>
                    {/* {cur.icon} */}
                    <span>{cur.label}</span>
                  
                  </a>
                 
                </Link>
                
              </li>
        
            ))}
                    
          </ul></div> 
             <div><Button variant="text"  > Sign in </Button>
             <Button variant="text"   >Sign Up</Button></div>
          
        </Hidden>
        
      </Toolbar>
    </AppBar>
  );
}

export default AppToolbar;
