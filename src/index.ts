import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return { hello: "world" };
});

app.post("/", (req) => {
  return { url: req.url };
});

app.listen({ port: 3000 });
