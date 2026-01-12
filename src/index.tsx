import { serve } from "bun";
import index from "./index.html";
import { getCachedStars } from "../utils/cache";

const server = serve({
  routes: {
    "/api/stars/:repo": async (req) => {
      const repo = req.params.repo;
      if (!repo) {
        return Response.json({ error: "Repo is required" }, { status: 400 });
      }
      // Decode the repo param (it will be URL encoded like "owner%2Frepo")
      const decodedRepo = decodeURIComponent(repo);
      const stars = await getCachedStars(decodedRepo);
      return Response.json({ repo: decodedRepo, stars });
    },
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
