const mongoose = require('../../config/db');

const ExameSchema = new mongoose.Schema({
     name:{
          type:String,
          require:true,
     },
     tipo:{
          type:String,
          require:true
     },
     status:{
          type:String,
          require:true
         
     },     

     createdAt:{
          type:Date,
          default: Date.now()
     }
    
})

ExameSchema.pre('save', async function(next){
   
     next();
})

const Exame = mongoose.model('exames', ExameSchema)

module.exports = Exame