const express = require('express');
const donate_router = express.Router();
const donate_controller = require('../controllers/donate');
const path = require("path");

donate_router.get("/", donate_controller.load);

module.exports = donate_router;