const Plant = require(`../models/plant`);

// Getting All Plants
const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Getting a Plant by it's ID
const getPlantById = async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findById(id);
    if (plant) {
      return res.json(plant);
    }
    return res.status(404).send(`that plant doesn't exist`);
  } catch (error) {
    if (error.name === `CastError` && error.kind === `ObjectId`) {
      return res.status(404).send(`That plant doesn't exist`);
    }
    return res.status(500).send(error.message);
  }
};
// Creating a Plant
// const new
// Updating a Plant

// Deleting a Plant

module.exports = {
  getAllPlants,
  getPlantById,
};
