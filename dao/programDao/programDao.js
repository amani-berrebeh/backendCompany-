const Programm = require("../../models/programSchema/programSchema");
const Contract = require("../../models/contractSchema/contractSchema");
const Quote = require("../../models/quoteSchema/quoteSchema");

const createProgramm = async (programmData) => {
  return await Programm.create(programmData);
};

const getProgramms = async () => {
  return await Programm.find().populate("company_id")
  // .populate("school_id")
};

const deleteProgramm = async (id) => {
  return await Programm.findByIdAndDelete(id);
};

const getProgrammById = async (id) => {
  return await Programm.findById(id);
};

const updateStatus = async (
  id,
  notes_for_client,
  unit_price,
  total_price,
  program_status,
  invoiceFrequency,
  within_payment_days
) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        notes_for_client: notes_for_client,
        unit_price: unit_price,
        total_price: total_price,
        program_status: program_status,
        invoiceFrequency: invoiceFrequency,
        within_payment_days: within_payment_days
      },
    }
  );
};

const convert_to_contract = async (programData) => {
  return await Contract.create(programData);
};

const updateToQuote = async (id_schedule, programData) => {
  return await Quote.create(programData);
};

const updateStatusToConverted = async (id, status) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        status: status
      },
    }
  );
};

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
  updateStatus,
  convert_to_contract,
  updateToQuote,
  deleteProgramm,
  updateStatusToConverted
};