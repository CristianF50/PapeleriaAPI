const config = require("../config/auth.config");
const { producto } = require("../models");
const db = require("../models");
const Producto = db.producto;

exports.list = async (req, res) => {

    let buscar = (req.body.buscar == undefined) ? '.*' : req.body.buscar + '.*'

    let pipeline = [
        {
            $sort: {nombre: 1}
        }
    ]
    if (req.body.search) {
        pipeline.push({
            $match: {
                $and: [
                    {
                        $or: [
                            { descripcion: new RegExp(buscar, "i") },
                            { sku: new RegExp(buscar, "i") },
                        ]
                    },
                ]
            }

        })
    }

    let productos = await Producto.aggregate(pipeline);


    return res.status(200).json({
        success: true,
        message: 'Consulta exitosa',
        data: productos
    })
  
};

exports.add = async (req, res) => {

    let producto = new Producto(req.body);

    console.log('new servicio', req.body);

    producto.save()
        .then(async producto => {
            console.log("chichepudo")
            return res.status(200).json({
                success: true,
                message: "Producto creado exitosamente"
            })
        })
        .catch(async error => {
            console.log('¿error', error)
            return res.status(400).json({
                success: false,
                message: (error)
            })
        })
};