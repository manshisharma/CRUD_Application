import React, {useEffect, useState} from 'react';
import {FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography} from '@material-ui/core';
import {editUser, getUsers} from "../Service/api.js";
import {useHistory, useParams} from 'react-router-dom';

const useStyle = makeStyles({
  container:{
    width:'50%',
    margin: '5% 0 0 25%',
    '& > *':{
      marginTop: 20
    }
  }
})

const initialValues ={
  name:'',
  username:'',
  email:'',
  phone:'',
}
function EditUser() {
  const [user, setUser] = useState(initialValues);
  const {name ,username ,email, phone}= user;
  const { id } = useParams();
  const classes = useStyle();
  const history = useHistory();

  useEffect(()=> {
    loadUserData();
  },[]);

  const loadUserData= async () =>{
   const response = await getUsers(id);
   setUser(response.data);
  }
  const onValueChange = (e) =>
  {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const editUserDetails = async() =>{
    await editUser(id, user);
    history.push("/all");
  }
  return (
    <div>
    <FormGroup className={classes.container}>
    <Typography variant="h4">Edit Users</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='name' value={name}/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='username' value={username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='email' value={email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='phone' value={phone}/>
      </FormControl>
      <Button variant="contained" onClick={() => editUserDetails()} style={{width:'20%', marginLeft:'35%'}} color="primary">Edit Users</Button>
    </FormGroup>
    </div>
  );
}

export default EditUser;
