import Card from "@/app/components/bento/CardTemplate";
import Link from "@/components/ui/Link";
import Halo from "@/components/ui/Halo";
import { FaTelegram } from "react-icons/fa";

export default function Gumroad() {
  return (
    
    <Halo className="col-span-1 row-span-1">
      <Link
        href="https://t.me/krasnokutskiii"
        className="no-underline"
      >
        <Card className="flex aspect-square flex-col gap-1.5 p-4 md:p-6">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-xl bg-[ffffff]">
            <Logo />
          </div>
          <p className="text-secondary">Telegram</p>
          <p className="line-clamp-2">My Telegram profile</p>
        </Card>
      </Link>
    </Halo>
  );
}


const Logo = () => (
    <FaTelegram size={16} className="h-full w-full" />
  );