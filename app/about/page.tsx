import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import noosphereLogo from "public/work/noosphere.png";
import skillupLogo from "public/work/logo-skillup.svg";
import camsLogo from "public/work/cams-logo.png";
import uhdLogo from "public/work/uhd.png";

import meArina from "public/gallery/me-arina.png";
import roma from "public/gallery/roma.jpg";

export const metadata: Metadata = {
  title: "About | Krasnokutskiy",
  description:
    "I am a QA engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
       <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
        About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
        <div className="mb-8 lg:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={roma}
            alt={"me and lily"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={meArina}
            alt={"me and lily"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-2xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            
            <p>
            Vadim Krasnokutsky, my experience in testing as a QA Engineer{" "}
              {new Date().getFullYear() - 2023} years. Besides testing, 
              I also love to develop myself and always learn something new. 
              I focus on technical equipment, creative work and a bit of personal development.
            </p>
            <p>
            You can chat with me at{" "}
              <Link
                className="underline"
                href="https://t.me/krasnokutskiii"
              >
                Telegram.
              </Link>{" "}
            
            </p>
            <p>
              When I&apos;m not at work, I'm most likely working on development or improving this site :]
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
        <div className="flex w-full flex-col gap-8">
            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                
                
                
                
                
                
                
                
                
                
                
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
            I started my career with courses at the Ukrainian training company SkillUP, and then I joined the company Noosphere. Where I still work today.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "QA Engineer",
    company: "Noosphere",
    time: "2023 -",
    imageSrc: noosphereLogo,
    link: "https://noosphereglobal.com/",
  },
  {
    title: "QA Student",
    company: "SkillUP",
    time: "2022 - 2023",
    imageSrc: skillupLogo,
    link: "https://skillup.ua/",
  },
  // {
  //   title: "Python Developer",
  //   company: "CAMS",
  //   time: "2019 - 2020",
  //   imageSrc: camsLogo,
  //   link: "https://camstex.com",
  // },
  // {
  //   title: "Coding Camp Instructor",
  //   company: "University of Houston",
  //   time: "2019",
  //   imageSrc: uhdLogo,
  //   link: "https://www.uhd.edu/",
  // },

];