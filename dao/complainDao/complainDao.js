const Complain = require('../../models/complainSchema/complainSchema');

const createComplain = async (complainData) => {
  return await Complain.create(complainData);
};


const updateComplaintStatus = async (complaintId, newStatus) => {
  try {
      return await Complain.findByIdAndUpdate(complaintId, { status: newStatus });
  } catch (error) {
      console.error('Error updating complaint status in DAO:', error);
      throw error;
  }
};

// DAO method to update the complaint response (message, author, and date)
const updateComplaintResponse = async (complaintId, responseMessage, responseAuthor, responseDate) => {
  try {
      return await Complain.findByIdAndUpdate(complaintId, {
          responseMessage,
          responseAuthor,
          responseDate
      });
  } catch (error) {
      console.error('Error updating complaint response in DAO:', error);
      throw error;
  }
};


const getComplains = async () => {
  return await Complain.find().populate("id_employee");
};

const getComplainById = async (id) => {
  return await Complain.findById(id);
}

const updateComplain = async (id, updateData) => {
  return await Complain.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteComplain = async (id) => {
  return await Complain.findByIdAndDelete(id);
};

module.exports = {
  createComplain,
  getComplains,
  updateComplaintResponse,
  getComplainById,
  updateComplain,
  deleteComplain,
  updateComplaintStatus,
  
};