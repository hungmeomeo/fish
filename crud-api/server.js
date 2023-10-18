const express = require("express");
require("dotenv").config();
const app = express();
const uploadRouter = require("./routes/upload.routes");
const connectToMongoDB = require("./database/mongo");
const port = process.env.PORT || 3000;

connectToMongoDB();

app.use(express.json());
app.use("/upload", uploadRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
