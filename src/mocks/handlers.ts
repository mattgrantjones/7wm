import { rest } from "msw";
import newsFeed from "./news.json";

/**
 * MOCK SERVER:
 * This is probably overkill for the exercise,
 * but the idea of being able to mock the behaviour
 * of a server when using mock JSON data is nice.
 */

export const handlers = [
  rest.get("/news", async (_, res, ctx) => {
    // Mocking an unstable connection with 80% probable uptime and 0-3 second response time
    const isServerUp: boolean = (() => {
      const serverStatus = Math.random() > 0.2;
      return serverStatus;
    })();

    // Good response
    if (isServerUp) {
      return res(
        ctx.delay(Math.random() * 1500),
        ctx.status(200),
        ctx.json(newsFeed)
      );
    }

    // Error response
    else {
      return res(ctx.delay(3000), ctx.status(400, "No connection to server"));
    }
  }),
];
