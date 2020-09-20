const User=require('../../database/collection/user');
const express=requiere('express');
const router=express.Router();
router.get('/',(req,res)=>{
    User.find({},(err,docs)=>{
        res.json(docs);

    })
})
module.exports=router;