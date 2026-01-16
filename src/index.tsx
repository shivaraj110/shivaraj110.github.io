import { serve } from "bun";
import index from "./index.html";

const getStarsCount = async (repo: string): Promise<number> => {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "shivaraj-portfolio",
    };

    if (process.env.GITHUB_AUTH_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_AUTH_TOKEN}`;
    }

    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
    });

    if (res.ok) {
      const data = await res.json();
      return data.stargazers_count ?? 0;
    }

    console.error(`GitHub API error for ${repo}: ${res.status} ${res.statusText}`);
  } catch (error) {
    console.error("Failed to fetch stars:", error);
  }
  return 0;
};

const getDownloadsCount = async (packageName: string): Promise<number> => {
  try {
    const res = await fetch(
      `https://api.npmjs.org/downloads/point/last-year/${packageName}`
    );

    if (res.ok) {
      const data = await res.json();
      return data.downloads ?? 0;
    }

    console.error(`NPM API error for ${packageName}: ${res.status} ${res.statusText}`);
  } catch (error) {
    console.error("Failed to fetch npm downloads:", error);
  }
  return 0;
};

const server = serve({
  routes: {
    "/api/stars/*": async (req) => {
      const url = new URL(req.url);
      const repo = decodeURIComponent(url.pathname.replace("/api/stars/", ""));

      if (!repo) {
        return Response.json({ error: "Repo is required" }, { status: 400 });
      }

      const stars = await getStarsCount(repo);

      return Response.json(
        { repo, stars },
        {
          headers: {
            "Cache-Control": "s-maxage=86400, stale-while-revalidate",
          },
        }
      );
    },
    "/api/downloads/*": async (req) => {
      const url = new URL(req.url);
      const packageName = decodeURIComponent(url.pathname.replace("/api/downloads/", ""));

      if (!packageName) {
        return Response.json({ error: "Package name is required" }, { status: 400 });
      }

      const downloads = await getDownloadsCount(packageName);

      return Response.json(
        { package: packageName, downloads },
        {
          headers: {
            "Cache-Control": "s-maxage=86400, stale-while-revalidate",
          },
        }
      );
    },
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
