const express = require("express");
require("dotenv").config();
const app = express();
const uploadRouter = require("./routes/upload.routes");
const authentication = require("./routes/auth.routes");
const connectToMongoDB = require("./database/mongo");
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

connectToMongoDB();

app.use(express.json());
app.use(cookieParser());

app.use("/upload", uploadRouter);
app.use("/auth", authentication);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
