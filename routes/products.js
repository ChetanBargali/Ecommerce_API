const express=require('express');
const router=express.Router();

const homeController=require('../controllers/products_controller');
router.get('/', homeController.home);

module.exports=router;