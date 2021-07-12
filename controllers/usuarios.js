const { response } = require("express");
const Usuario = require('../models/usuario'); 

const getUsuarios = async (req, res = response) => {

    const desde = Number( req.query.desde ) || 0;


    const usuarios = await Usuario
        .find({ _id: { $ne: req.uid } })
        .sort('-online')//muestra en orden desendente los clientes conectados
        .skip(desde)
        .limit(20)

    res.json({
        ok: true,
        usuarios,
    })

}

module.exports = {
    getUsuarios
}