const express = require('express');
const userModel = require('../models/Menu');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './menu/plato'); 
    },
    filename: (req, file, cb) => {
      const fileName = `${file.originalname}`;
      cb(null, fileName);
    },
  });
  
  
  const upload = multer({ storage });

  router.use('/verfotomenu', express.static(path.join(__dirname, '../menu/plato')));

router.post("/create",upload.single('file'), async (req, res) => {
  req.body.plato = req.body.plato.toUpperCase();
  req.body.descripcion = req.body.descripcion.toUpperCase();
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });

});


router.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.json({ success: true, data: data });
    console.log(data);
});



// Actualizar
router.put("/update",upload.single('file'),async (req, res) => {   
  if (req.body.plato) {req.body.plato= req.body.plato.toUpperCase();}
  if (req.body.descripcion) {req.body.descripcion= req.body.descripcion.toUpperCase();}
    console.log(req.body);
    const { _id, ...rest } = req.body;
    console.log(rest);
    const data = await userModel.updateOne({ _id: _id }, rest);
    res.send({ success: true, message: "actualizado", data: data });
});

// Eliminar
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "eliminado", data: data });
});


module.exports = router;
