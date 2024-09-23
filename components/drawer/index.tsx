/**
 * Variants:
 *  1.Permanent - DONE
 *  2.Persistent
 *  3.Temporary
 */

import { forwardRef, PropsWithChildren } from "react";
import clsx from "clsx";

interface DrawerProps extends PropsWithChildren {
  className?: string;
  classNames?: {
    root?: string;
    paper?: string;
  };
  variant?: "permanent";
  anchor?: "top" | "bottom" | "left" | "right";
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { children, anchor = "left", classNames = {}, className },
  ref
) {
  return (
    <div ref={ref} className={clsx("root", classNames.root, className)}>
      <div
        className={clsx(
          classNames.paper,
          "drawer__paper h-full fixed",
          anchor === "top" && "top-0 border-b",
          anchor === "left" && "left-0 border-r",
          anchor === "right" && "right-0 border-l",
          anchor === "bottom" && "bottom-0 border-t"
        )}
      >
        {children}
      </div>
    </div>
  );
});

export default Drawer;
