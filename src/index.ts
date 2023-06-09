import fastify from "fastify";
import { validateURL } from "./features/validate-url";

const app = fastify();

app.get("/", () => {
  return { hello: "world" };
});

app.post<{ Body: { url: string } }>("/", async (req) => {
  const { isValid } = await validateURL(req.body.url);
  if (!isValid) return { success: false, error: { code: "invalid_url" } };
  return { url: req.url };
});

app.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.info(`Server listening on ${address}`);
});
