const express = require('express');
const algo = require('./algos/remove-nth-node.js');
const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server running at PORT : ${port}`);
})

