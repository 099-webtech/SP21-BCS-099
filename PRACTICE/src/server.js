const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

// Define the path to the "public" directory
const publicPath = path.join(__dirname, "public");

// Serve static files from the "public" directory
app.use(express.static(publicPath));

// This route should come before the generic route
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'BAKERY_WEB.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
