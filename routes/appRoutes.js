const express = require("express");
const router = express.Router();
const labController = require("../app/controllers/labController");



router.post('/lab/create', async (req, res)=>{
     await labController.create(req, res);
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

module.exports = router