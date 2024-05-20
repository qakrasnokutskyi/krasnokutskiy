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
      strength={disableHalo ? 0 : 5}
      className={clsx(
        "h-full w-full overflow-clip rounded-xl bg-contrast text-sm shadow-soft dark:bg-secondary",
        className,
        noPadding ? "p-0" : "p-4 md:p-6",
      )}
    >
      {children}
    </Halo>
  );
}