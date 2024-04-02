const express = require('express');
const noteController = require('../controllers/noteController');
const userController = require("../controllers/userController")
const router = express.Router();
const tryCatch = require("../middlewares/trycatch")



router
.post("/signup",tryCatch(userController.registerUser))
.post("/login",tryCatch(userController.loginUser))
.post("/note",tryCatch(noteController.createNote))
.get("/note",tryCatch(noteController.getNotes))
.delete("/note/:id",tryCatch(noteController.deleteNotes))
.put("/note/:id",tryCatch(noteController.updatenote))
module.exports = router; 