const app = new (require('koa'));
const graphqlHTTP = require('koa-graphql');


app.use(
    graphqlHTTP({
        schema: require('./schema')
    })
)

app.listen(3000);