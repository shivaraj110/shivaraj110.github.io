const getStarsCount = async (repo: string) => {
  const res = await fetch(repo);
  return res?.body?.stargazers_count;
};
