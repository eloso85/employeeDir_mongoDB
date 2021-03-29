const {gql} = require('apollo-server');

module.exports = gql`
type employee{
    employeeId: String!
    postion: String!
    firstname: String!
    lastname: String!
    email: String!
    phonenumber: String!


}
type Query{
    getEmployees: [employee]
}
input CreateEmployee {
    
    employeeId: String!
    postion: String!
     firstname: String!
     lastname: String!
     email: String!
     phonenumber: String!
}
type Mutation{
    create(createEmployee: CreateEmployee):String
}
    
`; 