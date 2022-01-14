import React, {useEffect, useState} from 'react';
import {getUsers, deleteUser} from "../Service/api.js";
import {TableCell, TableRow, Table, TableHead, TableBody, makeStyles, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
  table:{
    width: '90%' ,
    margin: '50px 0 0 50px'
  },
  thead:{
    '& > *':{
      background: '#9c7c7c',
      color : '#ffffff',
      fontSize: 20
    }
  },
  row:{
    '& > *':{
      fontSize: 20
    }
  }
})

function AllUsers() {
  const [users, setUsers]= useState([]);
  const classes= useStyle();

  useEffect(() =>{
    getAllUsers();
  },[]);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
  }

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <div>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          users.map(user =>(
            <TableRow className={classes.row}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </div>
  );
}

export default AllUsers;
