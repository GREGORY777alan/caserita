const mongoose = require('../conexion');
const schemaData = mongoose.Schema({
    fecha_reserva:Date,
    estado_reserva:String,
    idusuario:{ type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
    idmesa: { type: mongoose.Schema.Types.ObjectId, ref: 'mesa' },
   
    
});

const userModel = mongoose.model("reserva", schemaData, "reserva");
module.exports = userModel;