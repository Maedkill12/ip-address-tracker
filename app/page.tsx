import dynamic from "next/dynamic";
import IPDetails from "./components/IPDetails";
import React from "react";
import { fetchIP } from "@/util";

export default async function Home({
  searchParams: { ip },
}: {
  searchParams: { ip: string };
}) {
  const ipData = ip ? await fetchIP(ip) : undefined;

  const Map = dynamic(() => import("./components/MapRender"), { ssr: false });

  return (
    <main className="relative flex-1">
      <IPDetails
        address={ipData?.address || "192.212.174.1001"}
        location={ipData?.location || "Brooklyn"}
        timezone={ipData?.timezone || "UTC-05:00"}
        isp={ipData?.isp || "SpaceX Starlink"}
      />
      <Map lat={ipData?.lat || 51.505} lng={ipData?.lng || -0.09} />
    </main>
  );
}
