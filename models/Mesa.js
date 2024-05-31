const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    num_mesa: String,
    ubicacion: String,

  
});

const userModel = mongoose.model("mesa", schemaData, "mesa");
module.exports = userModel;