var db = require("../models");
var breedObject = {};
var compareArray = [];

function compareArrays(arr1, arr2) {
  var arr3 = [];
  var sum = 0;
  for (var i = 0; i < arr1.length; i++) {
    var newNum = Math.abs(arr1[i] - arr2[i]);
    arr3.push(newNum);
  }
  for (var k = 0; k < arr3.length; k++) {
    sum += arr3[k];
  }
  return sum;
}

module.exports = function(app) {
  app.get("/api/allbreeds", function(req, res) {
    db.Breed.findAll({
      order: ["breed_name"]
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/quiz", function(req, res) {
    var survey = req.body;
    var sArray = [];
    for (var s in survey) {
      //console.log(survey[s]);
      for (var i = 0; i < survey[s].length; i++) {
        sArray.push(survey[s][i]);
      }
      console.log(sArray);
    }

    db.Breed.findAll({
      attributes: [
        "breed_name",
        "breed_energy",
        "breed_exercise_req",
        "breed_ease_training",
        "breed_grooming_req",
        "breed_affection_level",
        "breed_photo",
        "breed_descript"
      ]
    }).then(function(dbExamples) {
      breedObject = dbExamples;
      for (var br in breedObject) {
        var breedArray = [
          breedObject[br].dataValues.breed_energy,
          breedObject[br].dataValues.breed_exercise_req,
          breedObject[br].dataValues.breed_ease_training,
          breedObject[br].dataValues.breed_grooming_req,
          breedObject[br].dataValues.breed_affection_level
        ];
        compareArray.push(breedArray);
      }
      var sumArray = [];

      for (var j = 0; j < compareArray.length; j++) {
        console.log(compareArray[j]);
        sumArray.push(compareArrays(compareArray[j], sArray));
      }
      console.log("sumArray: " + sumArray);
      var num = Math.min.apply(null, sumArray);
      console.log(num);
      for (var t = 0; t < sumArray.length; t++) {
        if (sumArray[t] === num) {
          console.log("index: " + t);
          break;
        }
      }
      console.log(breedObject[t].dataValues.breed_name);
      var resultBreed = {
        breed_name: breedObject[t].dataValues.breed_name,
        breed_photo: breedObject[t].dataValues.breed_photo,
        breed_description: breedObject[t].dataValues.breed_descript
      };
      console.log(resultBreed);
      res.json(JSON.stringify(resultBreed));
    });
  });
  // Create a new breed
  app.post("/api/newbreed", function(req, res) {
    db.Breed.create({
      breed_name: req.body.breedName,
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

  app.get("/api/:breed", function(req, res) {
    var b = req.params.breed;
    db.Breed.findOne({
      where: {
        breed_name: b
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
