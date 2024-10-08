import clsx from "clsx";
import { PropsWithChildren } from "react";
import FadeTransition from "@/components/fade";

interface BackdropProps extends PropsWithChildren {
  open: boolean;
  className?: string;
}

export default function Backdrop({ children, open, className }: BackdropProps) {
  return (
    <FadeTransition
      open={open}
      className={clsx("fixed inset-0 bg-gray-800", className)}
    >
      {children}
    </FadeTransition>
  );
}
