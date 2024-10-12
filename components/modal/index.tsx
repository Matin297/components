"use client";

import clsx from "clsx";
import Portal from "@/components/portal";
import ModalProvider from "./modal-context";
import {
  useState,
  forwardRef,
  PropsWithChildren,
  SyntheticEvent,
  KeyboardEvent,
} from "react";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  transition?: "on" | "off";
  onClose?: (e: SyntheticEvent) => void;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(function ModalComponent(
  { children, open, onClose, transition = "off" },
  ref
) {
  const [exited, setExited] = useState(!open);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      onClose?.(e);
    }
  }

  // wait for transitions to finish before unmounting
  if (!open && (transition === "off" || exited)) return false;

  return (
    <Portal>
      <div
        ref={ref}
        role="presentation"
        onKeyDown={handleKeyDown}
        className={clsx(
          "fixed top-0 bottom-0 left-0 right-0",
          !open && exited && "invisible"
        )}
      >
        <ModalProvider value={{ open, exited, setExited, onClose }}>
          {children}
        </ModalProvider>
      </div>
    </Portal>
  );
});

export default Modal;
