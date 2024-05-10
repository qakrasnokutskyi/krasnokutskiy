import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import Logi from "public/gear/logi.jpeg";
import Copilot from "public/gear/copilot.jpeg";
import Superhuman from "public/gear/superhuman.png";
import Sway from "public/gear/sway.png";
import shelf from "public/gear/shelf.png";
import cables from "public/gear/cables.png";
import Nikon from "public/gear/nikon.png";
import EpidemicSound from "public/gear/epidemic-sound.png";
import DJI from "public/gear/dji.png";
import applephone from "public/gear/apple-iphone-xr.png";
import notion from "public/gear/Notion_app_logo.png";
import openai from "public/gear/openai.jpg"

export const metadata: Metadata = {
  title: "Gear | Krasnokutskiy",
  description:
    "My toolbox. This is gear I actually own and recommend.",
    openGraph: {
      title: "Gear | Krasnokutskiy",
      description: "My toolbox. This is gear I actually own and recommend.",
      type: "website",
      url: "https://krasnokutskiy.vercel.app/blog/gear",
      images: [{ url: "https://krasnokutskiy.vercel.app/api/og?title=Gear", alt: "gear" }],
    },
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="flex gap-4 items-center transition-opacity">
    <a
       className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl bg-tertiary shadow-sm border border-secondary"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="object-center object-cover w-full h-full"
        fill
      />
    </a>
    <div className="grow flex justify-between gap-2 items-center">
      <div className="space-y-1">
        <h3 className="text-primary line-clamp-2 leading-tight font-medium">
          {title}
        </h3>
        <p className="text-secondary line-clamp-3 leading-tight text-sm">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto h-fit rounded-full bg-tertiary px-4 py-1 text-sm"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Gear
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My toolbox.
            </p>
          </div>
          <p
            className="max-w-lg animate-in text-tertiary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            This is gear I actually own and recommend.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex flex-col gap-8 animate-in"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8 animated-list">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      // sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

const gear = [
  // {
  //   name: "Sway Standing Desk",
  //   category: "Ergonofis",
  //   image: Sway,
  //   description: "The highest of quality and made to last. Solid wood.",
  //   link: "https://shrsl.com/49346",
  //   sponsored: true,
  // },
  // {
  //   name: "Desk Shelf",
  //   category: "Ergonofis",
  //   image: shelf,
  //   description: "Elevates your screen(s) to help position your neck in a comfortable ergonomic posture.",
  //   link: "https://shrsl.com/49342",
  //   sponsored: true,
  // },
  // {
  //   name: "Cable Management Solution",
  //   category: "Ergonofis",
  //   image: cables,
  //   description: "An essential for a clean clutter free desk.",
  //   link: "https://shrsl.com/4933x",
  //   sponsored: true,
  // },
  // {
  //   name: "Logitech MX Master Mouse",
  //   category: "Home Desk Setup",
  //   image: Logi,
  //   description:
  //     "Ergonomic and comfortable to be used for all day use, love the scrolling!",
  //   link: "https://amzn.to/3U5syHG",
  // },
  // {
  //   name: "Orbitkey Desk Mat",
  //   category: "Home Desk Setup",
  //   image: "https://m.media-amazon.com/images/I/61Du63bfnlL._AC_SL1500_.jpg",
  //   description:
  //     "Leather and Recycled PET Felt | Document Hideaway | Magnetic Cable Holder",
  //   link: "https://amzn.to/3Dm37eu",
  //   sponsored: false,
  // },
  // {
  //   name: "Glorious GMMK Pro",
  //   category: "Home Desk Setup",
  //   image: "https://m.media-amazon.com/images/I/71Nk1Qb3PhS._AC_SL1500_.jpg",
  //   description: "A 75% mechanical keyboard",
  //   link: "https://amzn.to/3U9tcE9",
  // },
  {
    name: "Felt desk mat",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/71JA4HfKShL._AC_SX679_.jpg",
    description: "The premium 3mm felt desktop mat brings visual structure and organization to your workspace.",
    link: "https://crafta.ua/products/868953-fetrovyy-kovrik-dlya-rabochego-stola-pod-noutbuk-pk-monitor-poleznyy",
  },

  {
    name: "Logitech MX Master 3S",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX466_.jpg",
    description:
      "Wireless Performance Mouse, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome - Graphite - With Free Adobe Creative Cloud Subscription.",
    link: "https://hard.rozetka.com.ua/ua/mysh-logitech-mx-master-3s-performance-wireless-mouse-bluetooth/g45351880/",
  },
  {
    name: "Hator Rockfall EVO TKL",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/51I8fWAme9S._AC_SY355_.jpg",
    description: "Rockfall EVO is a stylish and practical gaming keyboard that will satisfy the needs of every gamer, giving complete freedom of action.",
    link: "https://rozetka.com.ua/ua/360503238/p360503238/",
  },
  {
    name: "Dell UltraSharp U2722D 27' LCD Monitor ",
    category: "Home Desk Setup",
    image: "https://m.media-amazon.com/images/I/81siJZnLDaL._AC_SY355_.jpg",
    description: "See images with 1.77 times more details than Full HD with 2560x1440 resolution on this 27-inch QHD display.",
    link: "https://hard.rozetka.com.ua/ua/dell_210_avbf/p229547683/",
  },
  // {
  //   name: "Nikon Z6 Full Frame Mirrorless",
  //   category: "Camera Gear",
  //   image: Nikon,
  //   description: "Love the Z6 because it's great for photos and videos.",
  //   link: "https://amzn.to/3T1CvGa",
  // },
  {
    name: "Notion",
    category: "Apps",
    image: notion,
    description:
      "Your wiki, docs, & projects. Together.",
    link: "https://www.notion.so/product",
    // sponsored: true,
  },
  {
    name: "Chat GPT",
    category: "Apps",
    image: openai,
    description:
      "OpenAI is an American company developing and licensing technologies based on machine learning.",
    link: "https://openai.com/",
    // sponsored: true,
  },
  // {
  //   name: "Akiflow",
  //   category: "Software",
  //   image: Akiflow,
  //   description:
  //     "Ultimate time blocking platform. Personal task manager and calendar application",
  //   link: "http://bit.ly/3TRr6dq",
  //   sponsored: true,
  // },
  // {
  //   name: "Dex - Personal CRM",
  //   category: "Software",
  //   image: Dex,
  //   description: "Build stronger relationships",
  //   link: "https://getdex.com/s/brianruizy",
  //   sponsored: true,
  // },
  // {
  //   name: "Superhuman Mail",
  //   category: "Apps",
  //   image: Superhuman,
  //   description: "1 Month FREE code. The fastest email experience.",
  //   link: "https://superhuman.com/refer/bspuaqpo",
  // },
  // {
  //   name: "Nikon Z 28mm f/2.8",
  //   category: "Camera Gear",
  //   image:
  //     "https://ik.imagekit.io/kit/products/e4/bb/nikkor-z-28mm-f-2-8-e4bbd44f78ee3423c2db3a13f117e0e8.png?tr=dpr-1,cm-pad_resize,bg-FFFFFF,q-80,w-270,h-270",
  //   description: "My main for walking around, with very useful aperture.",
  //   link: "https://amzn.to/3To5UdA",
  // },
  // {
  //   name: "NIKON Z 50mm f/1.8 S",
  //   category: "Camera Gear",
  //   image: "https://m.media-amazon.com/images/I/61u8mYpACQL._AC_SL1500_.jpg",
  //   description: "One of my main sit down lenses, with awesome bokeh.",

  //   link: "https://amzn.to/3yEqnmj",
  // },
  // {
  //   name: "GoPro HERO10 Black action camera",
  //   category: "Camera Gear",
  //   image: "https://m.media-amazon.com/images/I/61p2fYdYP+L._AC_SX679_.jpg",
  //   description: "Awesome for action video, I use it for my POV shots.",
  //   link: "https://amzn.to/3exkZuq",
  // },

  // {
  //   name: "Suptig Chest Mount for GoPro",
  //   category: "Camera Gear",
  //   image: "https://m.media-amazon.com/images/I/81y-UqVnYAL._AC_SL1500_.jpg",
  //   description: "This is how I record my POV bike rides! :)",
  //   link: "https://amzn.to/3DonSG9",
  // },
  // {
  //   name: "Movo VXR10-PRO",
  //   category: "Camera Gear",
  //   image: "https://m.media-amazon.com/images/I/71CUGiUL2dL._AC_SL1500_.jpg",
  //   description: "Compact Shotgun Mic Compatible with Cameras and phones.",
  //   link: "https://amzn.to/3EjYzH7",
  // },
  // {
  //   name: "Movo LV1-USB Lavalier Microphone",
  //   category: "Camera Gear",
  //   image: "https://m.media-amazon.com/images/I/61eFtjXUWkL._AC_SL1500_.jpg",
  //   description: "Lapel Microphone, Lav Mic, Clip on Microphone",
  //   link: "https://amzn.to/3WQ1nDe",
  // },
  // {
  //   name: "ULANZI Camera Tripod",
  //   category: "Camera Gear",
  //   image: "https://m.media-amazon.com/images/I/61FTKuvhBeL._AC_SL1500_.jpg",
  //   description: "Mini Flexible Tripod Stand, Universal use",
  //   link: "https://amzn.to/3Elzw6G",
  // },
  // {
  //   name: "Brevite Backpack",
  //   category: "Other",
  //   image: "https://m.media-amazon.com/images/I/61kuICMElAL._AC_SL1500_.jpg",
  //   description: "Compact Camera Backpack - A Minimalist & Travel-friendly",
  //   link: "https://amzn.to/3U5PTJo",
  // },
  // {
  //   name: "Mini 3 Pro Drone",
  //   category: "Other",
  //   image: DJI,
  //   description: "A great DJI drone for beginners, and a great vlogging tool.",
  //   link: "https://amzn.to/3mdZenf",
  // },
  // {
  //   name: "RS 3 Mini Gimbal",
  //   category: "Other",
  //   image: DJI,
  //   description: "small footprint and portable.",
  //   link: "https://amzn.to/40LPcJa",
  // },
  // {
  //   name: "HP DisplayLink Hub",
  //   category: "Office Desk Setup",
  //   image: "https://m.media-amazon.com/images/I/51Akvh02nDL._AC_SL1280_.jpg",
  //   description: "A hub that enables dual monitors on M1 MBP.",
  //   link: "https://amzn.to/3UnTbJo",
  // },
  // {
  //   name: "Dell UltraSharp U2722D",
  //   category: "Office Desk Setup",
  //   link: "https://amzn.to/3KLucN1",
  //   image: "https://m.media-amazon.com/images/I/81siJZnLDaL._AC_SL1500_.jpg",
  //   description: "A 27 inch 4K monitor",
  // },
  // {
  //   name: "VIVO Dual Monitor Stand",
  //   category: "Office Desk Setup",
  //   link: "https://amzn.to/40U0jzC",
  //   image: "https://m.media-amazon.com/images/I/61JPGtCI0GL._AC_SL1500_.jpg",
  //   description: "White articulating pneumatic monitor stand",
  // },
  {
    name: "Apple iphone XR",
    category: "Apple",
    image: applephone,
    description: "Apple iphone XR, RED color",
    link: "https://yabloki.ua/?gad_source=1&gclid=CjwKCAiA3aeqBhBzEiwAxFiOBjyk8Rub_4AlEutTAJQ5PQFwEn5DfwCbsykLIi3uLAXjfALR_eR8RBoCWnwQAvD_BwE",
  },
  {
    name: "iPad Air M1",
    category: "Apple",
    image: "https://m.media-amazon.com/images/I/61CjYtVb7cL._AC_SX522_.jpg",
    description: "M1 chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Space Gray",
    link: "https://yabloki.ua/ipad-air-m1-space-gray-64gb-wi-fi-2022-mm9c3.html",
  },
  {
    name: "Apple AirPods",
    category: "Apple",
    image:
      "https://m.media-amazon.com/images/I/41S0ElgxR7L._AC_SX522_.jpg",
    description:
      "New AirPods with charging case",
    link: "https://yabloki.ua/apple-airpods-v-zarjadnom-futljare-2019-mv7n2.html",
  },
  // {
  //   name: "Apple AirTag",
  //   category: "Apple",
  //   image: "https://m.media-amazon.com/images/I/81Lq1AfCYpS._AC_SL1500_.jpg",
  //   description: "Track your keys, wallet, backpack, and more.",
  //   link: "https://amzn.to/41dXoSa",
  // },
  // {
  //   name: "Apple MagSafe Charger",
  //   category: "Apple",
  //   image:
  //     "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1666381499607",
  //   description: "The MagSafe Charger delivers fast wireless charging.",
  //   link: "https://amzn.to/3UouXP4",
  // },

  
];
