import { createPortal } from "react-dom";
import { PropsWithChildren } from "react";

interface PortalProps extends PropsWithChildren {
  container?: HTMLElement;
}

export default function Portal({
  children,
  container = document.body,
}: PortalProps) {
  return createPortal(children, container);
}
