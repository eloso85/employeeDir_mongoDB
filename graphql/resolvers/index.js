const employeeResolvers = require('./employees')

module.exports={
    Query:{
        ...employeeResolvers.Query
    },
    Mutation:{
        ...employeeResolvers.Mutation
    }
}