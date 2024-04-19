const Luggage = require('../../models/luggageSchema/luggageSchema');

const createLuggage = async (luggageData) => {
  return await Luggage.create(luggageData);
};
const updateLuggage = async (id, updateData) => {
    return await Luggage.findByIdAndUpdate(id, updateData, { new: true });
  };

  const deletedLuggage = async (id) => {
    return await Luggage.findByIdAndDelete(id);
  };

  const getLuggages= async () => {
    return await Luggage.find();
  };

  const getLuggageById = async (id) => {
    return await Luggage.findById(id);
  }
module.exports = {
    createLuggage,
    updateLuggage,
    deletedLuggage,
    getLuggages,
    getLuggageById
  };
  