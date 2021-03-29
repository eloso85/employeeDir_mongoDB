const Employee = require('../../models/employee')

//const employee = require("../../models/employee");

module.exports = {
    Query:{
        async getEmployees(){
            try {
                //const associate = await Employee.find();
  
                const associate = await db.collection('employee').find().toArray() ;
                console.log(associate)
                return associate;
            } catch (err) {
                throw new Error(err);
                
            }
        }
      },
      Mutation:{
          async create(_, 
            {createEmployee: {employeeId, postion, firstname, lastname, email, phonenumber}}){//left off here need employee to work
              const newEmployee =({
                  
                employeeId,
                    postion,
                    firstname,
                    lastname,
                    email,
                    phonenumber,
                    createdAt: new Date().toISOString()
                    
              });
             // console.log(newEmployee)
              const employee = await newEmployee.save()
              //console.log(employee)
              return employee
          }
      }
}