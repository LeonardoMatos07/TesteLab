const express = require("express");
const router = express.Router();
const labController = require("../app/controllers/labController");
const exameController = require("../app/controllers/exameController");


router.post('/lab/create', async (req, res)=>{
     await labController.createLab(req, res);
})

router.get('/lab/get', async (req, res)=>{
     await labController.getLabs(req, res);
})

router.delete('/lab/delete', async (req, res)=>{
     await labController.deleteLab(req, res);
})

router.put('/lab/update', async (req, res)=>{
     await labController.updateLab(req, res);
})

router.post('/exame/create', async (req, res)=>{
     await exameController.createExame(req, res);
})

router.get('/exame/get', async (req, res)=>{
     await exameController.getExames(req, res);
})

router.get('/exameAss/get', async (req, res)=>{
     await exameController.getExamesAss(req, res);
})

router.delete('/exame/delete', async (req, res)=>{
     await exameController.deleteExame(req, res);
})

router.put('/exame/update', async (req, res)=>{
     await exameController.updateExame(req, res);
})

router.get('/association/get', async (req, res)=>{
     await exameController.associationExame(req, res);
})

router.post('/exame/createLot', async (req, res)=>{
     await exameController.createExameLot(req, res);
})

router.post('/lab/createLot', async (req, res)=>{
     await labController.createLabLot(req, res);
})

module.exports = router