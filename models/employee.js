const { model, Schema } = require('mongoose');

const employeeSchema = new Schema({
    employeeId: String,
    postion: String,
    firstname: String,
    lastname: String,
    email: String,
    phonenumber: String
   

});

module.exports = model('employee', employeeSchema);