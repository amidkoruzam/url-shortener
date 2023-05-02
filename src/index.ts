import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return { hello: "world" };
});

app.listen({ port: 3000 });
