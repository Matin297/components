"use client";

import clsx from "clsx";
import { PropsWithChildren } from "react";
import FadeTransition from "@/components/fade";
import { useModal } from "@/components/modal/modal-context";

interface BackdropProps extends PropsWithChildren {
  className?: string;
}

export default function Backdrop({ children, className }: BackdropProps) {
  const { open } = useModal();

  return (
    <FadeTransition
      open={open}
      className={clsx("fixed inset-0 bg-gray-800", className)}
    >
      {children}
    </FadeTransition>
  );
}
