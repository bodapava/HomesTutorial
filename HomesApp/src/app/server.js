const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "dist", "homes-app")));

// Handle all other routes and serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "homes-app", "index.html"));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
