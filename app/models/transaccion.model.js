const mongoose = require("mongoose");
const Producto = mongoose.model(
"Transaccion",    
new mongoose.Schema({
     tipo: Number,        
     total: String,               
     carrito: [{
          producto_id: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'producto'
          },
          cantidad: Number,
     }]},
     {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}));    

module.exports = Producto;