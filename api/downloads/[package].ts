const getDownloadsCount = async (packageName: string): Promise<number> => {
    try {
        const res = await fetch(
            `https://api.npmjs.org/downloads/point/last-year/${packageName}`
        );

        if (res.ok) {
            const data = await res.json();
            return data.downloads ?? 0;
        }

        console.error(`NPM API error: ${res.status} ${res.statusText}`);
    } catch (error) {
        console.error("Failed to fetch npm downloads:", error);
    }
    return 0;
};

export default async function handler(
    req: { query: { package?: string | string[] } },
    res: {
        status: (code: number) => {
            json: (data: unknown) => void;
        };
        setHeader: (name: string, value: string) => void;
    }
) {
    const { package: pkg } = req.query;

    if (!pkg || typeof pkg !== "string") {
        return res.status(400).json({ error: "Package name is required" });
    }

    const decodedPackage = decodeURIComponent(pkg);
    const downloads = await getDownloadsCount(decodedPackage);
    // Cache at Vercel edge for 24 hours
    res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
    return res.status(200).json({ package: decodedPackage, downloads });
}
