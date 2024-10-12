import clsx from "clsx";
import { type Anchor } from "@/components/utils";
import { type HTMLAttributes, forwardRef, PropsWithChildren } from "react";

interface PaperProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  anchor?: Anchor;
  className?: string;
}

const Paper = forwardRef<HTMLDivElement, PaperProps>(function PaperComponent(
  { anchor, className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        className,
        "bg-white",
        "h-full fixed",
        anchor === "top" && "top-0 border-b",
        anchor === "left" && "left-0 border-r",
        anchor === "right" && "right-0 border-l",
        anchor === "bottom" && "bottom-0 border-t"
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default Paper;
