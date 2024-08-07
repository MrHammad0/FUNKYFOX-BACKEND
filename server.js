require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5080;
const connectDB = require('./database/db');
const Vehiclerouter = require("./routes/vehicle");
const adminRoutes=require('./routes/admin')
const driversRoutes = require("./routes/drivers");
const rentalroutes=require('./routes/rentalReport')
const maintRoutes=require('./routes/maintenance')
const maintActRoutes=require('./routes/maintainceAcitivity')
const operationalroutes=require('./routes/OperationalRoutes')
const complianceRoutes=require('./routes/complianceroutes')
const AccidentRoute=require('./routes/accidentRoutes')
const trafficFineRoutes=require('./routes/traficRoutes')
const financeRoutes=require('./routes/financeRoutes')
const ExpenseRoutes=require("./routes/expenseroutes")
const incomerouter=require("./routes/incomeRoutes")
const plRoutes=require('./routes/profitlossroutes')
connectDB()


app.use(express.json())


app.use("/api/v1", Vehiclerouter)
app.use("/api/v1", adminRoutes)
app.use("/api/v1", driversRoutes)
app.use("/api/v1", rentalroutes)
app.use("/api/v1", maintRoutes)
app.use("/api/v1",maintActRoutes)
app.use("/api/v1",operationalroutes)
app.use("/api/v1",complianceRoutes)
app.use("/api/v1",AccidentRoute)
app.use("/api/v1",trafficFineRoutes)
app.use("/api/v1",financeRoutes)
app.use("/api/v1",ExpenseRoutes)
app.use("/api/v1",incomerouter)
app.use("/api/v1",plRoutes)



app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});
