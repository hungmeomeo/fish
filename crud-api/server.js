const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors"); // Import the cors package
const uploadRouter = require("./routes/upload.routes");
const authentication = require("./routes/auth.routes");
const connectToMongoDB = require("./database/mongo");
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");

connectToMongoDB();

app.use(express.json());
app.use(cookieParser());

// Enable CORS for all routes by setting origin to "*"
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  })
);

app.use("/query", uploadRouter);
app.use("/auth", authentication);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
