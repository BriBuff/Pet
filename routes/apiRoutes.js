var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/allbreeds", function(req, res) {
    db.Breed.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new breed
  app.post("/api/newbreed", function(req, res) {
    var breed = req.body;
    var routeName = breed.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    db.Breed.newBreed.create({
      routeName: routeName,
      breed_name: name,
      breed_energy: energy,
      breed_exercise_req: exercise,
      breed_ease_training: training,
      breed_grooming_req: grooming,
      breed_affection_level: affection,
      breed_descript: description,
      breed_photo: photo,
      breed_link: link
    });
    res.json(newBreed);
  });
};
