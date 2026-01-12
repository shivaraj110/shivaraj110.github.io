import { getStarsCount } from "@/hooks/stars";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const getCachedStars = async (repo: string) => {
  // check for existing key
  const starKey = `stars:${repo}`;
  const cachedStars = await redis.get(starKey);
  if (cachedStars !== null) {
    console.log("cache hit");
    return cachedStars;
  }

  const starData = await getStarsCount(repo);
  console.log("cache miss, creating new cache");
  await redis.set(starKey, starData.stars, { ex: 60 * 60 * 24 }); // expires after 24 hours
  return starData.stars;
};
