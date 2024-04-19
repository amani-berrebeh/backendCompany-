const Contract = require("../../models/contractSchema/contractSchema");

const createContract = async (contractData) => {
  try {
    const currentYear = new Date().getFullYear();
    const latestContract = await Contract.findOne(
      {},
      {},
      { sort: { updatedAt: -1 } }
    );
    let latestNumber = 0;
    if (latestContract && latestContract.accountRef) {
      const match = latestContract.accountRef.match(/C\d{4}\/(\d+)/);
      if (match) {
        latestNumber = parseInt(match[1], 10); 
      }
    }
    const newNumber = latestNumber + 1;
    const paddedNumber = newNumber.toString().padStart(4, "0");
    const contractRef = `C${currentYear}/${paddedNumber}`;
    contractData.accountRef = contractRef;
    const newContract = await Contract.create(contractData);

    return newContract;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateContract = async (id, updateData) => {
  return await Contract.findByIdAndUpdate(id, updateData, { new: true });
};

const deletedContract = async (id) => {
  return await Contract.findByIdAndDelete(id);
};

const getContracts = async () => {
  return await Contract.find()
    .populate("idProgram")
    .populate("vehicleType")
    .populate("journeyType")
    .populate("luggageDetails")
  
};

const getContractById = async (id) => {
  return await Contract.findById(id);
};

// const getContractByIdCorporate = async (idCorporate) => {
//   return await Complain.find({idCorporate});
// }

module.exports = {
  getContractById,
  createContract,
  updateContract,
  deletedContract,
  getContracts,
  // getContractByIdCorporate
};