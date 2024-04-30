import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Link from "@/components/ui/Link";
import Card from "@/app/components/bento/CardTemplate";
import Halo from "@/components/ui/Halo";

// get youtube subs count from route handler api/youtube
async function getData() {
  const res = await fetch("https://b-r.io/api/youtube");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function YouTube() {
  const data = await getData();

  return (
    <Halo className="col-span-2 row-span-1">
    <Card className="flex justify-between gap-6 p-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-bl from-[#7638FA] via-[#FF006A] to-[#FED702]">
          <FaInstagram className="text-2xl text-white" />
        </div>
        <p className="text-secondary">About me</p>
        {/* <p className="line-clamp-2">@krasnokutskii</p> */}
        <Link
          className="mt-auto flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm no-underline hover:bg-tertiary"
          href="https://www.instagram.com/krasnokutskii.vadim/"
        >
          <span className="font-medium text-primary">Follow</span>
          <span className="text-tertiary"> 421
          {/* {Math.floor(data?.subscribers / 100)} */}
          </span>
        </Link>
      </div>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-3">
        <Link
          className="relative col-span-1 row-span-1"
          href={"/blog/microsoft-hackathon"}
        >
          <Image
            src={"/blog/microsoft-hackathon/vr.jpg"}
            fill={true}
            alt="thumbnail"
            className="rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
        <Link
          className="relative col-span-1 row-span-1"
          href={"/blog/microsoft-hackathon"}
        >
          <Image
            src={"/blog/microsoft-hackathon/finalphoto.jpg"}
            fill={true}
            alt="thumbnail"
            className="rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
        <Link
          className="relative col-span-1 row-span-1"
          href={"/blog/microsoft-hackathon"}
        >
          <Image
            src={"/blog/microsoft-hackathon/noosphere-planetarium.jpg"}
            fill={true}
            alt="thumbnail"
            className="rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
        <Link
          className="relative col-span-1 row-span-1"
          href={"/blog/microsoft-hackathon"}
        >
          <Image
            src={"/blog/microsoft-hackathon/zal3.png"}
            fill={true}
            alt="thumbnail"
            className="rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
        </div>
        </Card>
    </Halo>
  );
}