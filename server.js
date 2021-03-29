const { ApolloServer } = require('apollo-server')

const MongoClient = require('mongodb').MongoClient

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers')



const url = "mongodb://localhost:27017";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(function (err){
    console.log("MongoDb connected");
    db = client.db("employees")
    if(err) throw err
})



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req})
});
server.listen(5000).then(({ url }) => console.log(`Server running at ${ url } `));



