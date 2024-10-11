const db = require(`../db`);
const Plant = require(`../models/plant`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  const plants = [
    {
      name: "Aloe Vera",
      description:
        "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world. It is cultivated for agricultural and medicinal uses.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png",
    },
    {
      name: "Snake Plant",
      description:
        "Sansevieria trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint Georges sword, mother-in-laws tongue, and vipers bowstring hemp, among other names.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/2560px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg",
    },
    {
      name: "Areca palm",
      description:
        "Dypsis lutescens, also known as golden cane palm, areca palm, yellow palm, or butterfly palm, is a species of flowering plant in the family Arecaceae, native to Madagascar and naturalized in the Andaman...",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/1280px-Dypsis_lutescens1.jpg",
    },
    {
      name: "Spider Plant",
      description:
        "Chlorophytum comosum, often called spider plant but also known as airplane plant, St. Bernards lily, spider ivy, ribbon plant, and hen and chickens is a species of perennial flowering plant. It is native to tropical and southern Africa, but has become naturalized in other parts of the world, including western Australia.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hierbabuena_0611_Revised.jpg/1920px-Hierbabuena_0611_Revised.jpg",
    },
    {
      name: "Dracaena",
      description:
        "Dracaena is a genus of about 120 species of trees and succulent shrubs. In the APG IV classification system, it is placed in the family Asparagaceae, subfamily Nolinoideae (formerly the family Ruscaceae). It has also formerly been separated (sometimes with Cordyline) into the family Dracaenaceae or placed in the Agavaceae (now Agavoideae).",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f7/Dracaena_draco.jpg",
    },
    {
      name: "Weeping Fig",
      description:
        "Ficus benjamina, commonly known as weeping fig, benjamin fig or ficus tree, and often sold in stores as just ficus, is a species of flowering plant in the family Moraceae, native to Asia and Australia. It is the official tree of Bangkok.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/1280px-Ficus_benjamina2.jpg",
    },
    {
      name: "Peace Lily",
      description:
        "Spathiphyllum is a genus of about 40 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/1024px-Spathiphyllum_cochlearispathum_RTBG.jpg",
    },
    {
      name: "Bristlecone Pine",
      description:
        "Pinus longaeva, is among the longest-lived life forms on Earth. The oldest Pinus longaeva is more than 4,800 years old, making it the oldest known individual of any species.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Gnarly_Bristlecone_Pine.jpg/1920px-Gnarly_Bristlecone_Pine.jpg",
    },
    {
      name: "Aconite",
      description:
        "Also known as wolfsbane or devils helmet, Aconitum is a genus of over 250 species of flowering plants belonging to the family Ranunculaceae. These herbaceous perennial plants are chiefly native to the mountainous parts of the Northern Hemisphere,growing in the moisture-retentive but well-draining soils of mountain meadows. Most species are extremely poisonous and must be dealt with very carefully.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Aconitum_variegatum_110807f.jpg",
    },
  ];
  await Plant.deleteMany();
  await Plant.insertMany(plants);
  console.log(`
    ==============================
    +=+=+[New Plants Created!]=+=+
    ==============================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
