import React, {useState} from 'react';
import {FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography} from '@material-ui/core';
import {addUser} from "../Service/api";
import {useHistory} from 'react-router-dom';
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
function AddUsers() {
  const [user, setUser] = useState(initialValues);
  const {name ,username ,email, phone}= user;
  const classes = useStyle();
  const history = useHistory();

  const onValueChange = (e) =>
  {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const addUserDetails = async() =>{
    await addUser(user);
    history.push("./all");
  }
  return (
    <div>
    <FormGroup className={classes.container}>
    <Typography variant="h4">Add Users</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='name' value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='username' value={username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='email' value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='phone' value={phone} />
      </FormControl>
      <Button variant="contained" onClick={() => addUserDetails()} style={{width:'20%', marginLeft:'35%'}} color="primary">Add Users</Button>
    </FormGroup>
    </div>
  );
}

export default AddUsers;
