import React from 'react';
import { AppBar, Toolbar, makeStyles} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

const useStyle = makeStyles({
  header:{
    background:'#111111'
  },
  tabs:{
    color:'#ffffff' ,
    marginRight: '12.5%' ,
    marginLeft: '12.5%' ,
    textDecoration: 'none' ,
    fontSize: 20
  }
})
function NavBar (){
  const classes = useStyle();
  return(
    <>
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink className={classes.tabs} to="./" exact>CRUD Application</NavLink>
        <NavLink className={classes.tabs} to="all" exact>All Users</NavLink>
        <NavLink className={classes.tabs} to="add" exact>Add Users</NavLink>
      </Toolbar>
    </AppBar>
    </>
  );
}
export default NavBar;
