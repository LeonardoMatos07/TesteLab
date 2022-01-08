const { deleteOne } = require('../models/Labs')
const Exame = require('../models/Exames')
const Lab = require('../models/Labs')
const logger = require('pino')()




const createExame = async (req, res)=>{
     try{
          const {name, tipo, status} = req.body

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
          const {_id, nameUp, tipoUp, statusUp} = req.body

          if(!await Exame.findOne({_id})){
               logger.warn({msg:"Exame não encontrado"})
               return res.status(400).send({hasError: true, erro: "Exame não encontrado"})
          }

          await Exame.findOneAndUpdate({_id: _id}, {status: statusUp, name:nameUp, tipo: tipoUp})
          
          return res.send('Dados alterados')
         

     } catch(err){
          logger.error({msg:"Erro ao atualizar exame"})
          res.status(400).send({erro:"Erro ao atualizar exame"})
     }
}


// Associação de um exame com laboratórios



const associationExame = async (req, res) => {

    try {
         const {_id, name} = req.body

         exame = await Exame.findOne({_id})

         if(!exame){
              logger.warn({msg:"Exame não encontrado"})
              return res.status(400).send({hasError: true, erro: "Exame não encontrado"})
         }

         lab = await Lab.findOne({name})

         if(!lab){
            logger.warn({msg:"Laboratório não encontrado"})
            return res.status(400).send({hasError: true, erro: "Laboratório não encontrado"})
       }
       return res.send(lab)
    


    } catch(err){
         logger.error({msg:"Erro ao associar exame"})
         res.status(400).send({erro:"Erro ao associar exame"})
    }
}

module.exports = {createExame, getExames, deleteExame, updateExame, associationExame}