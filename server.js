const express = require(`express`);
const db = require(`./db`);
const plantController = require(`./controllers/plantControllers`);

const PORT = process.env.PORT || 3001;

const app = express();

app.get(`/`, (req, res) => res.send(`Welcome to the plant page!`));
app.get(`/plants`, plantController.getAllPlants);
app.get(`/plants/:id`, plantController.getPlantById);

app.listen(PORT, () => console.log(`Running at ${PORT}`));
