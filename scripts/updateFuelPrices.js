// Node 18+ has fetch built-in
const URL = "https://www.mapquest.com/us/kansas/buddys-426971741";

function pickNumberAfter(label, html) {
  // Matches things like: $2.54 Regular
  const re = new RegExp("\\$([0-9]+\\.[0-9]{2})\\s+" + label, "i");
  const m = html.match(re);
  return m ? Number(m[1]).toFixed(2) : null;
}

async function main() {
  const res = await fetch(URL, {
    headers: {
      // Basic UA reduces some blocks; still not guaranteed
      "User-Agent": "Mozilla/5.0 (GitHubActions; buddy-site-price-fetch)",
      "Accept": "text/html",
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }

  const html = await res.text();

  const regular = pickNumberAfter("Regular", html);
  const midgrade = pickNumberAfter("Mid-Grade", html);
  const premium = pickNumberAfter("Premium", html);
  const diesel = pickNumberAfter("Diesel", html);

  const payload = {
    regular,
    midgrade,
    premium,
    diesel,
    source: "mapquest",
    sourceUrl: URL,
    updatedAt: new Date().toISOString(),
  };

  const fs = await import("node:fs/promises");
  await fs.writeFile("public/fuel-prices.json", JSON.stringify(payload, null, 2));
  console.log("Updated fuel-prices.json:", payload);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});