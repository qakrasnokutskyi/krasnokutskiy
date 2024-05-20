import Card from "@/app/components/bento/CardTemplate";
import Link from "@/components/ui/Link";
import { FaGithub } from "react-icons/fa";

export default function Instagram() {
  return (
    <Card className="col-span-1 row-span-1 flex aspect-square flex-col gap-1.5">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-bl from-[#000000] via-[#000000] to-[#000000]">
          <FaGithub className="text-2xl text-white" />
        </div>
        <p className="text-secondary">GitHub</p>
        <p className="line-clamp-2">Repository and all</p>
        <Link
          className="mt-auto flex w-fit items-center gap-1.5 rounded-full bg-tertiary px-4 py-1.5 text-sm no-underline"
          href="https://github.com/qakrasnokutskyi"
        >
          <span className="font-medium text-primary">Follow</span>
          <span className="text-tertiary">15</span>
        </Link>
      </Card>
  );
}