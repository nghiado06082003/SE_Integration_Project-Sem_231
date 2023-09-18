const express = require('express');
const review_router = express.Router();
const review_controller = require('../controllers/review');
const path = require("path");

review_router.get("/list", review_controller.loadList);

module.exports = review_router;