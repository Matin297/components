"use client";

import clsx from "clsx";
import Portal from "@/components/portal";
import ModalProvider from "./modal-context";
import { useState, forwardRef, PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  transition?: "on" | "off";
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(function ModalComponent(
  { children, open, transition = "off" },
  ref
) {
  const [exited, setExited] = useState(!open);

  // wait for transitions to finish before unmounting
  if (!open && (transition === "off" || exited)) return false;

  return (
    <Portal>
      <div
        ref={ref}
        role="presentation"
        className={clsx(
          "fixed top-0 bottom-0 left-0 right-0",
          !open && exited && "invisible"
        )}
      >
        <ModalProvider value={{ open, exited, setExited }}>
          {children}
        </ModalProvider>
      </div>
    </Portal>
  );
});

export default Modal;
