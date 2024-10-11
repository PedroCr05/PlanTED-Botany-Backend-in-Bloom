const express = require(`express`);
const db = require(`./db`);
const plantController = require(`./controllers/plantControllers`);
const bodyParser = require(`body-parser`);
const logger = require(`morgan`);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger(`dev`));
app.use(bodyParser.json());
app.get(`/`, (req, res) => res.send(`Welcome to the plant page!`));
app.get(`/plants`, plantController.getAllPlants);
app.get(`/plants/:id`, plantController.getPlantById);
app.post(`/plants`, plantController.createPlant);
app.put(`/plants/:id`, plantController.plantUpdate);
app.delete(`/plants/:id`, plantController.plantDeleted);

app.listen(PORT, () => console.log(`Running at ${PORT}`));
