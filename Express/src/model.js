let mongoose = require('mongoose')

let empSchema = new mongoose.Schema({
    empName : String
})

let employee = mongoose.model('employees',empSchema)
module.exports = employee

