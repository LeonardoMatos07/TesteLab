const { deleteOne } = require('../models/Labs')
const Exame = require('../models/Exames')
const logger = require('pino')()

// Um exame pode ser associado a um laboratório ou no momento da criação ou em uma atualização
// O nome do laboratório == true indica que aquele laboratório está associado ao exame
// Tanto os exames quanto os laboratórios podem ser associados estando no status ativo ou inativo, assim como a remoção 


const createExame = async (req, res)=>{
     try{
          const {name, tipo, status, lab} = req.body

          if(!name || !tipo || !status){
               logger.error({msg:"Não foi possivel cadastrar o exame, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel cadastrar o exame, dados incompletos"})
          }

          exame = await Exame.create(req.body)
          logger.info({msg:"Exame cadastrado com sucesso!"})
          return res.send({exame})

     } catch(err){
          console.log(err)
          logger.error({msg:"Erro no registro do exame"})
          res.status(400).send({hasError: true, erro: "Erro no registro do exame"})
     }
}


const getExames = async (req, res)=>{
     try{
          const {status} = req.body

          if(!status){
               logger.error({msg:"Não foi possivel encontrar os exames, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar os exames, dados incompletos"})
          }

          exame = await Exame.find({status})

          if(!exame){
               logger.error({msg:"Nenhum exame ativo!"})
               return res.status(400).send({erro:"Nenhum exame ativo!"})
          }
          logger.info({msg:"Exames encontrados!"})
          return res.send({exame})

     } catch(err){
          logger.error({msg:"Erro ao encontrar exames"})
          res.status(400).send({erro:"Erro ao encontrar exames"})
     }
}

const deleteExame = async (req, res)=>{
     try{
          const {_id} = req.body

          if(!_id){
               logger.error({msg:"Não foi possivel encontrar o exame, dados inválidos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar o exame, dados inválidos"})
          }

          exame = await Exame.findOne({_id})

          if(!exame){
               logger.error({msg:"Exame não enontrado!"})
               return res.status(400).send({erro:"Exame não encontrado!"})
          }

          await Exame.deleteOne({_id})
          logger.info({msg:"Exame deletado!"})
          return res.send("Exame deletado!")

     } catch(err){
          logger.error({msg:"Erro ao deletar exame, dados inválidos"})
          res.status(400).send({erro:"Erro ao deletar exame, dados inválidos"})
     }
}

const updateExame = async (req, res) => {

     try {
          const {_id, nameUp, tipoUp, statusUp, labUp} = req.body

          if(!await Exame.findOne({_id})){
               logger.warn({msg:"Exame não encontrado"})
               return res.status(400).send({hasError: true, erro: "Exame não encontrado"})
          }

          await Exame.findOneAndUpdate({_id: _id}, {status: statusUp, name:nameUp, tipo: tipoUp, lab:labUp})
          
          return res.send('Dados alterados')
         

     } catch(err){
          logger.error({msg:"Erro ao atualizar exame"})
          res.status(400).send({erro:"Erro ao atualizar exame"})
     }
}




module.exports = {createExame, getExames, deleteExame, updateExame, associationExame}