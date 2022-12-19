export async function loadTime(): Promise<any> {
  try {
  const response = await fetch("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8", {
    method: "GET",
    cache: 'no-cache',
    headers: {
    'accept': 'application/json',
    },
  });

  if (!response.ok) {
    return {};
  }
  const r = await response.json();
  return r;

  } catch (e) {
    return {};
  }
}
  