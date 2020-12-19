import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Avatar alt="photo" src="https://media.idownloadblog.com/wp-content/uploads/2018/01/Facebook-contact-icon.jpg" 
        style={{margin: '0 auto' ,  width: '150px', height: '150px'}}/>
        <br/>
  <p style={{margin: '0 auto' }}> Mr. FirstName LastName </p>
  
  <br/>
  <Divider light />

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      
      <Link to="/" style={{color: 'black' , textDecoration: 'none'}}>Dashboard</Link>
    </ListItem>
    
    
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <Link to="/settings" style={{color: 'black' , textDecoration: 'none'}}>Settings</Link>
    </ListItem>
  </div>
);

