// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:5000/new", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.json({
        id: Date.now(),
        text: req.body.text,
      })
    );
  }),
];
