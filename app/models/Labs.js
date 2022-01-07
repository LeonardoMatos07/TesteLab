const mongoose = require('../../config/db');

// const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
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

     createdAt:{
          type:Date,
          default: Date.now()
     }
    
})

UserSchema.pre('save', async function(next){
   
     next();
})

const Lab = mongoose.model('labs', UserSchema)

module.exports = Lab