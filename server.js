const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config')

const typeDefs = gql`
    type Query{
        sayHi:String!
    }
`
const resolvers = {
    Query:{
        sayHi: ()=>'hello world'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(()=>{
        console.log('mongo db connected')
        return server.listen({port:5000})
        .then(res =>{
            console.log(`Sever is runnign at ${res.url}`)
        })
    });




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,(err,db)=>{
//     if(err) throw err;
//     var dbo = db.db("test02");
//     dbo.createCollection("customers", (err,res)=>{
//         if (err) throw err;
//         console.log("Collection created");
//         db.close();
//     })
    
// });