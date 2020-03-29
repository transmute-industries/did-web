// const fetch = require('node-fetch')

// const getJson = async url => {
//   const res = await fetch(url, {
//     headers: {
//         Accept: 'application/ld+json',
//     },
//     method: 'get',
//   });

//   const data = await res.json();
//   if (res.status > 300){
//     console.log('Error: ', url);
//     console.error(data);
//   }
//   return data;
// }
    

const resolve = async did => {
  if (did.indexOf('did:web') === 0){
    const parts = did.split('#')[0].split(':');
    let endpoint
    if (parts.length == 3){
      endpoint = `https://${parts[2]}/.well-known/did.json`;
    } else {
      endpoint = `https://${parts.splice(2).join('/')}/did.json`;
    }
    return endpoint;
    // return getJson(endpoint)
  } else {
    throw new Error('Only DID Web is Supported.')
  }
};

module.exports = { resolve };
