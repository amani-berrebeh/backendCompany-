const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors =require ("cors");
const dotenv = require("dotenv");
const companyRoutes= require ("./routes/companyRoutes/companyRoutes")
const employeeRoutes= require ("./routes/employeeRoutes/employeeRoutes")
const employeeAttendanceRoutes= require("./routes/employeeAttendanceRoutes/employeeAttendanceRoute")
const studentAttendanceRoutes= require("./routes/studentAttendanceRoutes/studentAttendanceRoute")
const groupEmployeeRoutes= require("./routes/groupCompanyRoutes/groupCompanyRoutes")
const complainRoutes = require("./routes/complainRoutes/complainRoutes")
const noteRoutes = require("./routes/noteRoutes/noteRoutes")
const programRoutes = require ("./routes/programRoutes/programRoutes")
const contractRoutes = require("./routes/contractRoutes/contractRoutes")
const luggageRoutes = require("./routes/luggageRoutes/luggageRoutes")
const vehicleTypeRoutes = require("./routes/vehicleTypeRoutes/vehicleTypeRoutes")
const journeyRoutes = require("./routes/journeyRoutes/journeyRoutes")
const quoteRoutes = require("./routes/quoteRoutes/quoteRoutes")
dotenv.config();
app.use(cors())
app.use(express.static('files'));


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect(process.env.MONGO_URL, {})
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));


    //routes
app.use("/employees",employeeRoutes)
app.use("/complains",complainRoutes)
app.use("/companies",companyRoutes)
app.use("/employeeAttendance",employeeAttendanceRoutes)
app.use("/studentAttendance",studentAttendanceRoutes)
app.use("/groupEmployee",groupEmployeeRoutes)
app.use("/notes",noteRoutes)
app.use("/programs", programRoutes)
app.use("/contract", contractRoutes)
app.use("/luggage", luggageRoutes)
app.use("/vehicleType", vehicleTypeRoutes)
app.use("/journey", journeyRoutes)
app.use("/quote", quoteRoutes)

app.listen(8800, () => {
    console.log("Backend server is running!");
});