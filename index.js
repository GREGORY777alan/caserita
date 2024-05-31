const express = require('express');
const cors = require('cors');
const mongoose = require('./conexion');

const usuarioRutas = require('./route/usuariologinRuta');
const usuariocrudRutas = require('./route/usuarioRuta');
const pedidoRutas = require('./route/pedidoRuta');
const reservaRutas = require('./route/reservaRuta');
const mesaRutas = require('./route/mesaRuta');
const menuRutas = require('./route/menuRuta');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto", PORT);
});

app.use('/usuario', usuarioRutas);
app.use('/usuarioc', usuariocrudRutas);
app.use('/pedido', pedidoRutas);
app.use('/reserva', reservaRutas);
app.use('/mesa', mesaRutas);
app.use('/menu', menuRutas);
