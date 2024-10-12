"use client";

import clsx from "clsx";
import FadeTransition from "@/components/fade";
import { PropsWithChildren, MouseEvent } from "react";
import { useModal } from "@/components/modal/modal-context";

interface BackdropProps extends PropsWithChildren {
  className?: string;
}

export default function Backdrop({ children, className }: BackdropProps) {
  const { open, onClose } = useModal();

  function handleClick(e: MouseEvent) {
    if (onClose) {
      onClose(e);
    }
  }

  return (
    <FadeTransition
      open={open}
      onClick={handleClick}
      className={clsx("fixed inset-0 bg-gray-800", className)}
    >
      {children}
    </FadeTransition>
  );
}
