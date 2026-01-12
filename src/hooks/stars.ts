export const getStarsCount = async (
  repo: string,
): Promise<{ repo: string; stars: number }> => {
  try {
    const headers: HeadersInit = {
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

      return { repo: repo, stars: data.stargazers_count ?? 0 };
    }
  } catch {
    // Silently fail
  }
  return { repo: repo, stars: 0 };
};
