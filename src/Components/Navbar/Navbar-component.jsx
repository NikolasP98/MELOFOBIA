/*jshint esversion:9*/

import React, { useState } from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar-style.scss";
import logo from "../../Assets/melof.png";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="root">
        <AppBar position="static">
          <Toolbar className="root">
            <img src={logo} alt="Melofobia logo" className="title" />
            <div className="flex-container">
              <IconButton
                className="menu-logo"
                onClick={() => setOpen(!open)}
                color="inherit"
                aria-label="menu"
              >
                {open ? <CloseIcon style={{ fontSize: 32 }}/> : <MenuIcon style={{ fontSize: 32 }}/>}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
        >
          <div className="list" role="presentation">
            <List className="list-container">
              <ListItem button className="list-item">
                <IconButton onClick={() => setOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </ListItem>
              <ListItem button className="list-item">
                <ListItemText primary="First Item" className="list-item-text" />
              </ListItem>
              <ListItem button className="list-item">
                <ListItemText
                  primary="Second Item"
                  className="list-item-text"
                />
              </ListItem>
              <ListItem button className="list-item">
                <ListItemText primary="Third Item" className="list-item-text" />
              </ListItem>
            </List>
            <Divider />
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default Navbar;
