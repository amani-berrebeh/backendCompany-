const groupEmployee = require("../../models/groupEmployee/groupEmployeeSchema");
const Employee = require("../../models/employeeSchema/employeeSchema");

async function createGroupAndAssignEmployees(groupData, employeeIds) {
  try {
    const newGroup = await groupEmployee.create(groupData);

    if (Array.isArray(employeeIds) && employeeIds.length > 0) {
      await Employee.updateMany(
        { _id: { $in: employeeIds } },
        { $set: { group: newGroup._id } }
      );

      await groupEmployee.findByIdAndUpdate(newGroup._id, {
        $push: { employees: { $each: employeeIds } },
      });
    }

    return newGroup;
  } catch (error) {
    throw new Error(
      "Error creating group and assigning employees: " + error.message
    );
  }
}

const addNewGroup = async (GroupData) => {
  return await groupEmployee.create(GroupData);
};
async function getAllGroups() {
  try {
    // Query all groups and populate the 'employees' field
    return await groupEmployee.find().populate("employees").populate("program").exec();
  } catch (error) {
    throw new Error("Error fetching all groups: " + error.message);
  }
}
const getallGroupEmployee = async () => {
  return await groupEmployee
    .find()
    .populate("employees")
    .populate("program")
    .exec();
};
const getGroupEmployeeById = async (id) => {
  return await groupEmployee.findById(id);
};

const getGroupByIdEmployee = async (id_employee) => {
  return await groupEmployee.find(id_employee);
};
const getGroupByIdCompany = async (id_company) => {
  return await groupEmployee.find(id_company);
};

const updateGroupEmployee = async (id, updateData) => {
  return await groupEmployee.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteGroupEmployee = async (id) => {
  return await groupEmployee.findByIdAndDelete(id);
};

async function getActiveGroups() {
  try {
    // Query only groups with status "active" and populate the 'employees' field
    return await groupEmployee
      .find({ status: "active" })
      .populate("employees")
      .exec();
  } catch (error) {
    throw new Error("Error fetching active groups: " + error.message);
  }
}


async function removeEmployeeFromGroup(groupId, employeeId) {
  await groupEmployee.findByIdAndUpdate(groupId, {
    $pull: { employees: employeeId }
  });
}
async function getEmployeeInfo(groupId, employeeId) {
  try {
    // Construct query to find employee information based on groupId and employeeId
    const employeeInfo = await groupEmployee.findOne({ _id: groupId, employees: employeeId })
                                             .populate('employees')
                                             .exec();
    
    return employeeInfo;
  } catch (error) {
    throw new Error('Error fetching employee information:', error);
  }
}
module.exports = {
  getActiveGroups,
  getAllGroups,
  createGroupAndAssignEmployees,
  getGroupByIdCompany,
  addNewGroup,
  getGroupByIdEmployee,
  getGroupEmployeeById,
  updateGroupEmployee,
  deleteGroupEmployee,
  getallGroupEmployee,
  removeEmployeeFromGroup,
  getEmployeeInfo
};
