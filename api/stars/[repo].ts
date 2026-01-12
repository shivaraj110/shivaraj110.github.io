const getStarsCount = async (repo: string): Promise<number> => {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
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

    console.error(`GitHub API error: ${res.status} ${res.statusText}`);
  } catch (error) {
    console.error("Failed to fetch stars:", error);
  }
  return 0;
};

export default async function handler(
  req: { query: { repo?: string | string[] } },
  res: {
    status: (code: number) => {
      json: (data: unknown) => void;
    };
    setHeader: (name: string, value: string) => void;
  }
) {
  const { repo } = req.query;

  if (!repo || typeof repo !== "string") {
    return res.status(400).json({ error: "Repo is required" });
  }

  const decodedRepo = decodeURIComponent(repo);
  const stars = await getStarsCount(decodedRepo);

  // Cache at Vercel edge for 24 hours
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  return res.status(200).json({ repo: decodedRepo, stars });
}
