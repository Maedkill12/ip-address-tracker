"use client";

type Props = {
  address: string;
  location: string;
  timezone: string;
  isp: string;
};

function Info({ tag, value }: { tag: string; value: string }) {
  return (
    <div className="grid w-full h-full grid-cols-1 grid-rows-2 gap-2 sm:w-1/4 sm:pl-2 md:pl-4 lg:pl-12">
      <h2 className="flex flex-col justify-end text-sm font-semibold text-center text-gray-500 uppercase sm:text-start">
        {tag}
      </h2>
      <p
        className="text-xl font-bold text-center sm:break-words line-clamp-1 sm:line-clamp-2 sm:text-start"
        title={value}
      >
        {value}
      </p>
    </div>
  );
}

export default function IPDetails({ address, location, timezone, isp }: Props) {
  return (
    <div className="absolute z-10 bg-white rounded-xl -top-[150px] sm:-top-[80px] h-[300px] sm:h-[160px] left-0 right-0 mx-8 md:mx-24 flex flex-col justify-evenly items-center sm:divide-x-2 sm:flex-row sm:py-6">
      <Info tag="ip address" value={address} />
      <Info tag="location" value={location} />
      <Info tag="timezone" value={timezone} />
      <Info tag="isp" value={isp} />
    </div>
  );
}
