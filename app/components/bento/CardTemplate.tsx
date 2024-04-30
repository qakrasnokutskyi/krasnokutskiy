import clsx from "clsx";
import Halo from "@/components/ui/Halo";
export default function Card({
  children,
  className,
  disableHalo,
  noPadding,
}: {
  children: React.ReactNode;
  className: string;
  disableHalo?: boolean;
  noPadding?: boolean;
}) {
  return (
    <Halo
      strength={disableHalo ? 0 : 10}
      className={clsx(
        "shadow-soft h-full w-full overflow-clip rounded-xl bg-white text-sm dark:bg-primary",
        className,
        noPadding ? "p-0" : "p-4 md:p-6",
      )}
    >
      {children}
    </Halo>
  );
}