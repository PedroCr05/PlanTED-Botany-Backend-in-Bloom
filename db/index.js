const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://PedroCr05:2hjmI1jKWsKbdvGq@clusters.k4z0f.mongodb.net/plantDataBase?retryWrites=true&w=majority&appName=clusters"
  )
  .then(() => {
    console.log(
      `
        =================================
        +=[Connection Success: MongoDB]+=
        =================================
        `
    );
  })
  .catch((e) => {
    console.error(
      `
        ================================
        =+=+=+[ERROR SERVER CRASH]=+=+=+
        ================================
        `,
      e.message
    );
  });

const db = mongoose.connection;

module.exports = db;
