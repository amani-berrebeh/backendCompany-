const programDao = require("../../dao/programDao/programDao");

const createProgram = async (programData) => {
    return await programDao.createProgram(programData);
};

const getPrograms = async () => {
  return await programDao.getPrograms();
};

// const updateQuote = async (id, updateData) => {
//   return await quoteDao.updateQuote(id, updateData);
// };

// const deleteQuote = async (id) => {
//   return await quoteDao.deleteQuote(id);
// };


module.exports = {
createProgram,
getPrograms,

};