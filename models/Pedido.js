const mongoose = require('../conexion');
const schemaData = mongoose.Schema({
    fecha_pedido:Date,
    estado_pedido:String,
    cantidad:Number,
    costo_total:Number,
    idusuario:{ type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
    idmenu: { type: mongoose.Schema.Types.ObjectId, ref: 'menu' },
   
    
});

const userModel = mongoose.model("pedido", schemaData, "pedido");
module.exports = userModel;