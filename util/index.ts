const GEOLOCATION_API_KEY = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY;

export async function fetchIP(ip: string): Promise<IP | undefined> {
  const data = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${GEOLOCATION_API_KEY}&ipAddress=${ip}`
  );
  const res = (await data.json()) as {
    ip: string;
    location: {
      region: string;
      city: string;
      lat: number;
      lng: number;
      postalCode: string;
      timezone: string;
    };
    isp: string;
  };
  return res.ip
    ? {
        address: res.ip,
        location: `${res.location.city}, ${res.location.region} ${res.location.postalCode}`,
        isp: res.isp,
        lat: res.location.lat,
        lng: res.location.lng,
        timezone: `UTC${res.location.timezone}`,
      }
    : undefined;
}
