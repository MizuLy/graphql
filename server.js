const express = require("express");
const app = express();
const PORT = 8080;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/graphql`);
});
