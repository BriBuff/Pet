var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/allbreeds", function (req, res) {
    db.Breed.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new breed
  app.post("/api/newbreed", function (req, res) {
    var breed = req.body.name;
    var routeName = breed.replace(/\s+/g, "").toLowerCase();
    db.Breed.create({
      routeName: routeName,
      breed_name: breed,
      breed_energy: req.body.energy,
      breed_exercise_req: req.body.exercise,
      breed_ease_training: req.body.training,
      breed_grooming_req: req.body.grooming,
      breed_affection_level: req.body.affection,
      breed_descript: req.body.description,
      breed_photo: req.body.photo,
      breed_link: req.body.link
    })
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
};
