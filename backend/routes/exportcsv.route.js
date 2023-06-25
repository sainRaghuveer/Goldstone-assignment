const express = require("express");
const controller = require("../controllers/exportCsv.controller")


////Creating routes with express routes 
const exportCsvRouter = express.Router();


/*--------------------- user data exported in csv Route ----------------------*/
exportCsvRouter.get('/export-csv', controller.exportCSV)


module.exports = {
    exportCsvRouter
}