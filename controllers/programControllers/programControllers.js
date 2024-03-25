const programService = require("../../services/programServices/programService");

const getPrograms = async (req, res) => {
  try {
    const programs = await programService.getPrograms();
    res.json(programs);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const createProgram = async (req, res) => {
  try {
    const {
      notes,
      extra,
      recommanded_capacity,
      exceptDays,
      freeDays_date,
      droppOff_date,
      pickUp_date,
      destination_point,
      stops,
      origin_point,
      programName,
      dropOff_time,
      pickUp_Time,
      workDates
    } = req.body;
    const newProgram = await programService.createProgram({
      notes,
      extra,
      recommanded_capacity,
      exceptDays,
      freeDays_date,
      droppOff_date,
      pickUp_date,
      destination_point,
      stops,
      origin_point,
      programName,
      dropOff_time,
      pickUp_Time,
      workDates
    });
    console.log("req.body",req.body)
    res.status(201).json(newProgram);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getPrograms,
  createProgram,
};