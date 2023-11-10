const {Router}=require('express');
const controller=require('../controller/user.controller')
const router =Router();

// router.get('/',(req,res)=>{
//     res.send('using api route');
// });

router.get('/',controller.getUser);
router.post('/',controller.cresteUser);
router.get('/:id',controller.getUserEx);

module.exports=router;