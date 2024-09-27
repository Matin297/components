import clsx from "clsx";
import { type Anchor } from "./utils";
import { forwardRef, PropsWithChildren } from "react";

interface PaperProps extends PropsWithChildren {
  anchor?: Anchor;
  className?: string;
}

const Paper = forwardRef<HTMLDivElement, PaperProps>(function PaperComponent(
  { anchor, className, children },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        className,
        "h-full fixed",
        anchor === "top" && "top-0 border-b",
        anchor === "left" && "left-0 border-r",
        anchor === "right" && "right-0 border-l",
        anchor === "bottom" && "bottom-0 border-t"
      )}
    >
      {children}
    </div>
  );
});

export default Paper;
