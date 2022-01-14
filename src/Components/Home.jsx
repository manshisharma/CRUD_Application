import React from 'react';
import CRUDoperations from '../Assets/Images/CRUDoperations.jpg';
import {Box, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
  img:{width:'75%',
  height:'75%' ,
  marginLeft: '10%' ,
  }
})
function Home() {
  const classes = useStyle();
  return (
    <div>
        <img className={classes.img} src={CRUDoperations} />
    </div>
  );
}

export default Home;
