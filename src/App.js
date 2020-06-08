import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchBar from './components/search/SearchBar';
import Preview from './components/preview/Preview';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  placeHolderText: {
    textAlign: 'center',
    color: '#cccccc'
  }
}));

export default function App() {
  const classes = useStyles();

  const [webSiteData, setWebSiteData] = useState('');

  function fetchDataFromURL (url) {
    if (url === null) {
      setWebSiteData('');
    } else {
      axios.get('/fetchUrl', {params: {address: url}})
      .then(function (response) {
        setWebSiteData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBar onSearch={fetchDataFromURL}/>
        </Grid>
        <Grid item xs={12}>
        {!webSiteData ? (
         <Typography variant="h4" className={classes.placeHolderText} gutterBottom>Please Search for web above!</Typography>
          ) : (
          <Preview data={webSiteData} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}