/**
 * Variants:
 *  Modal
 *  Docked
 */

import clsx from "clsx";
import { forwardRef, PropsWithChildren } from "react";

interface DrawerProps extends PropsWithChildren {
  className?: string;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { children, className },
  ref
) {
  return (
    <div ref={ref} className={clsx("root", className)}>
      {children}
    </div>
  );
});

export default Drawer;
export { default as DrawerPaper } from "./paper";
export { default as DrawerSlide } from "./slide";
