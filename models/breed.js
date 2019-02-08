module.exports = function(sequelize, DataTypes) {
  var breed = sequelize.define("Breed", {
    breed_name: DataTypes.STRING,
    breed_energy: DataTypes.INTEGER,
    breed_exercise_req: DataTypes.INTEGER,
    breed_ease_training: DataTypes.INTEGER,
    breed_grooming_req: DataTypes.INTEGER,
    breed_affection_level: DataTypes.INTEGER,
    breed_desc: DataTypes.TEXT,
    breed_photo: DataTypes.STRING,
    breed_link: DataTypes.STRING
  });

  return breed;
};
