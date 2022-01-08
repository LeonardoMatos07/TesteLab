const mongoose = require('../../config/db');

const LabSchema = new mongoose.Schema({
     name:{
          type:String,
          require:true,
     },
     endereco:{
          type:String,
          require:true
     },
     status:{
          type:String,
          require:true
         
     },    
     loteLab:{
          type:Object,
          require:true
         
     },   

     createdAt:{
          type:Date,
          default: Date.now()
     }
    
})

LabSchema.pre('save', async function(next){
   
     next();
})

const Lab = mongoose.model('labs', LabSchema)

module.exports = Lab