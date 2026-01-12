import { getStarsCount } from "@/hooks/stars";
import { Redis } from "@upstash/redis";
const redis = new Redis({
  url: "https://glorious-cod-22697.upstash.io",
  token: "AVipAAIncDE4OGRmYzNkY2I4MGM0ODZiYTBmNDdlN2U2ODBiZDFmYnAxMjI2OTc",
});

export const getCachedStars = async (repo: string) => {
  // check for existing key
  const starKey = `stars:${repo}`;
  const cachedStars = await redis.get(starKey);
  if (cachedStars) {
    return cachedStars;
  }

  const starData = await getStarsCount(repo);

  await redis.set(starKey, starData.stars, { ex: 60 * 60 * 24 }); // expires after 24 hours
  return starData.stars;
};
