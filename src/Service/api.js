import Axios from 'axios';

const url='http://localhost:3003/users';

export const getUsers = async(id) =>{
  id = id || '';
  return await Axios.get(`${url}/${id}`);
}

export const addUser = async(user)=>{
  return await Axios.post(url,user);
}

export const editUser = async(id, user)=>{
  return await Axios.put(`${url}/${id}`, user);
}

export const deleteUser = async(id) =>{
  return await Axios.delete(`${url}/${id}`);
}
