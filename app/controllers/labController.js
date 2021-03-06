const Lab = require('../models/Labs')
const logger = require('pino')()




const createLab = async (req, res)=>{
     try{
          const {name, endereco, status} = req.body
          if(await Lab.findOne({name})){
               logger.warn({msg:"O laboratório já está registrado"})
               return res.status(400).send({hasError: true, erro: "O laboratório já está registrado"})
          }
          if(!name || !endereco || !status){
               logger.error({msg:"Não foi possivel cadastrar o laboratório, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel cadastrar o laboratório, dados incompletos"})
          }

          lab = await Lab.create(req.body)
          logger.info({msg:"Laboratório cadastrado com sucesso!"})
          return res.send({lab})

     } catch(err){
          console.log(err)
          logger.error({msg:"Erro no registro do laboratório"})
          res.status(400).send({hasError: true, erro: "Erro no registro do laboratório"})
     }
}


const getLabs = async (req, res)=>{
     try{
          const {status} = req.body

          if(!status){
               logger.error({msg:"Não foi possivel encontrar os laboratórios, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar os laboratórios, dados incompletos"})
          }

          lab = await Lab.find({status})

          if(!lab){
               logger.error({msg:"Nenhum laboratório ativo!"})
               return res.status(400).send({erro:"Nenhum laboratório ativo!"})
          }
          logger.info({msg:"Laboratórios encontrados!"})
          return res.send({lab})

     } catch(err){
          logger.error({msg:"Erro ao encontrar laboratórios"})
          res.status(400).send({erro:"Erro ao encontrar laboratórios"})
     }
}

const deleteLab = async (req, res)=>{
     try{
          const {_id} = req.body

          if(!_id){
               logger.error({msg:"Não foi possivel encontrar o laboratório, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar o laboratório, dados incompletos"})
          }

          lab = await Lab.findOne({_id})

          if(!lab){
               logger.error({msg:"Laboratório não registrado!"})
               return res.status(400).send({erro:"Laboratório não registrado!"})
          }

          await Lab.deleteOne({_id})
          logger.info({msg:"Laboratório deletado!"})
          return res.send("Laboratório deletado!")

     } catch(err){
          logger.error({msg:"Erro ao deletar laboratório"})
          res.status(400).send({erro:"Erro ao deletar laboratório"})
     }
}

const updateLab = async (req, res) => {

     try {
          const {_id, nameUp, enderecoUp, statusUp} = req.body

          if(!await Lab.findOne({_id})){
               logger.warn({msg:"Laboratório não encontrado"})
               return res.status(400).send({hasError: true, erro: "Laboratório não encontrado"})
          }

          await Lab.findOneAndUpdate({_id: _id}, {name:nameUp, endereco: enderecoUp, status: statusUp})
          
          logger.info({msg:"Laboratório alterado!"})
          return res.send("Laboratório alterado!")
         

     } catch(err){
          logger.error({msg:"Erro ao encontrar laboratório"})
          res.status(400).send({erro:"Erro ao encontrar laboratório"})
     }
}

const createLabLot = async (req, res)=>{
     try{
          loteLab = await Lab.insertMany(req.body)
          logger.info({msg:"Laboratórios cadastrados com sucesso!"})
          return res.send({loteLab})
 
     } catch(err){
          console.log(err)
          logger.error({msg:"Erro no registro dos laboratórios"})
          res.status(400).send({hasError: true, erro: "Erro no registro dos laboratórios"})
     }
 }
 

module.exports = {createLab, getLabs, deleteLab, updateLab, createLabLot}