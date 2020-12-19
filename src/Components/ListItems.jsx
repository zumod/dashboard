import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';



export const mainListItems = (
  <div>
  <p style={{margin: '0 auto' }}> Mr. FirstName LastName </p>
  
  <br/>
  <Divider light />

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      
      <Link to="/" style={{color: 'black' , textDecoration: 'none'}}>Dashboard</Link>
    </ListItem>
  </div>
);

