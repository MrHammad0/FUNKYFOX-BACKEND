require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5080;
const connectDB = require('./database/db');
const Vehiclerouter = require("./routes/vehicle");
const adminRoutes=require('./routes/admin')

const driversRoutes = require("./routes/drivers");
connectDB()


app.use(express.json())


app.use("/api/v1", Vehiclerouter)
app.use("/api/v1", adminRoutes)
app.use("/api/v1", driversRoutes)


app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});
