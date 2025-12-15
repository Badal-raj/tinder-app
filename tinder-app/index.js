const express = require("express");
const env = require('dotenv');
env.config()

const { ConnectDB } = require("./dbConnect/connection");
const { userRoutes } = require("./routes/userRoutes");
const { userProfileRoute } = require('./routes/profileRoutes')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

app.use("/api", userRoutes);
app.use('/api', userProfileRoute)

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
