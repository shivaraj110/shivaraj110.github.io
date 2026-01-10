export const getStarsCount = async (repo: string): Promise<number> => {
  const res = await fetch(repo);
  const body = await res.json();
  return body.stargazers_count;
};
