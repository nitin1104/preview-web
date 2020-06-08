const express = require('express');
const router = express.Router();
const urlMetadata = require('url-metadata');


router.get('/fetchUrl', (req, res)=>{

  const url = 'https://'+req.query.address;

  urlMetadata(url).then(
    function (metadata) { // success handler
      res.status(200).json(metadata);
    },
    function (error) { // failure handler
      console.log(error)
    })
  })

module.exports = router;