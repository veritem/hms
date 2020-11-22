const express = require('express')
import { Router } from 'express';
import multer from 'multer';
const router = express();

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'assets');
    },
    filename: (req,file,cb) => {
        console.log(file);
        cb(null,file.originalname);
    }
});

// const fileFilter = (req,file,cb) => {
//     if(file.mimetype == 'cv/pdf'){
//         cb(null,true);
//     } else {
//         cb(null,false);
//     }
// }
const upload =  multer({ storage: storage });

router.post('/upload',upload.single('cv'),(req,res,next) => {
    try{
        console.log(req.file);
        return res.status(201).json({
            message: 'File uploaded successfully'
        })
    } catch (error){
        console.error(error);
    }
})

module.exports = router;