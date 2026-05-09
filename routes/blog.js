const express= require("express");
const router = express.Router();

//import controller

const { dummyLink} =require("../controllers/abc");
const { createComment } = require("../controllers/ommentController");


//mapping
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);



//export
module.exports=router;