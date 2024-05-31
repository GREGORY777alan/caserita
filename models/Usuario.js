const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
  
nombre_usuario:String,
password:String,
fecha_creacion:Date,
estado_usuario:String,
tipo_usuario:String,
nombre:String,
apellidos:String,
celular:Number,
direccion:String

});

const userModel = mongoose.model("usuario", schemaData, "usuario");
module.exports = userModel;