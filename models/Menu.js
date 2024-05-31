const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    plato: String,
    foto_plato: String,
    precio: Number,
    descripcion: String,
    estado_menu: String,
});


const userModel = mongoose.model("menu", schemaData, "menu");
module.exports = userModel;