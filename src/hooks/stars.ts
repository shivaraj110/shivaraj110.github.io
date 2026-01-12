export const getStarsCount = async (
  repo: string,
): Promise<{ repo: string; stars: number }> => {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (res.ok) {
      const data = await res.json();
      return { repo: repo, stars: data.stargazers_count ?? 0 };
    }
  } catch {
    // Silently fail
  }
  return { repo: repo, stars: 0 };
};
