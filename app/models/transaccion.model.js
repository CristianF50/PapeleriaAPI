const mongoose = require("mongoose");
const Producto = mongoose.mode(
"Transaccion",    
new mongoose.Schema({
          descripcion: String,        
          sku: String,        
          cantidad: Number,        
          costo: Number,        
          precio: Number,        
          minimo: Number,        
          status: {            
               type: Number,            
              default: 0        
              },
              timestamps: {    
              createdAt: 'created_at', 
              updatedAt: 'updated_at' 
              });    
}))
module.exports = Producto;