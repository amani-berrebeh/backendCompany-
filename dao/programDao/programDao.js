const Program = require('../../models/programSchema/programSchema')

const createProgram = async (programData) => {
  return await Program.create(programData);
};

const getPrograms = async () => {
  return await Program.find();
};

// const updateQuote = async (id, updateData) => {
//   return await Quote.findByIdAndUpdate(id, updateData, { new: true });
// };

// const deleteQuote = async (id) => {
//   return await Quote.findByIdAndDelete(id);
// };

module.exports = {
createProgram,
getPrograms,
};