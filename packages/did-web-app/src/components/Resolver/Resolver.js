import React from "react";
// import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box';

import config from '../../config'

import ReadOnlyJsonView from '../ReadOnlyJsonView/ReadOnlyJsonView'


const getJson = async url => {
  const res = await fetch(url, {
    headers: {
        Accept: 'application/ld+json',
    },
    method: 'get',
  });

  const data = await res.json();
  if (res.status > 300){
    console.log('Error: ', url);
    console.error(data);
  }
  return data;
}
    
const Resolver = () => {

  const [state, setState] = React.useState({
    did: 'did:web:did.actor:alice'
  })
  return (
  
    <Grid container>
      <Grid item xs={12}>
      <Box display="flex" p={1}>
        <Box p={1} flexGrow={1} >
        <TextField label="Standard" fullWidth value={state.did} onChange={(event)=>{
          setState({
            ...state,
            did: event.target.value
          })
        }}/>
        </Box>
        <Box p={1} >
        <Button variant={'contained'} onClick={async ()=>{
          const didDocument = await getJson(config.apiRoot + 'api/v1/identifiers/' + state.did)
          setState({
            ...state,
            didDocument
          })
        }}>Resolve</Button>
        </Box>
      </Box>
      </Grid>
      {state.didDocument !== undefined && <Grid item xs={12}>
        <ReadOnlyJsonView jsonObject={state.didDocument} />
      </Grid>}
      
    </Grid>


);
}

// Resolver.propTypes = {
  
// };

export default Resolver;
