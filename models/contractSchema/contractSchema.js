const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contractSchema = new mongoose.Schema({
  contractName: String,
  invoiceFrequency: String,
  customerNotes: String,
  staffNotes: String,
  prices: String,
  // salesperson: { type: Schema.Types.ObjectId, ref: "Team" },
  idProgram: { type: Schema.Types.ObjectId, ref: "Programm" },
  idAccount: String,
  vehicleType: { type: Schema.Types.ObjectId, ref: "VehiculeType" },
  journeyType: { type: Schema.Types.ObjectId, ref: "Journey" },
  luggageDetails: { type: Schema.Types.ObjectId, ref: "Luggage" },
  contractStatus: String,
  accountRef: String,
  accountName: String,
  accountEmail: String,
  accountPhone: String,
  idCorporate:{ type: Schema.Types.ObjectId, ref: "Company" },
  
},
{
  timestamps: true,
});


module.exports = mongoose.model("Contract", contractSchema);