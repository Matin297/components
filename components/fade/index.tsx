"use client";

import clsx from "clsx";
import { setTransitionValue } from "@/components/utils";
import { PropsWithChildren, useRef, MouseEvent } from "react";
import { Transition, type TransitionStatus } from "react-transition-group";

interface FadeProps extends PropsWithChildren {
  open: boolean;
  className?: string;
  onClick: (e: MouseEvent) => void;
}

const DURATION = 300;
const STYLES = {
  entering: { opacity: 0.5 },
  entered: { opacity: 0.5 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: {},
};

export default function FadeTransition({
  open,
  onClick,
  children,
  className,
}: FadeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  function handleEnter() {
    setTransitionValue(nodeRef.current!, {
      duration: "standard",
      timing: "easeInOut",
      prop: "opacity",
    });
  }

  function handleEntered() {
    // no-op
  }

  function handleEntering() {
    // no-op
  }

  function handleExit() {
    setTransitionValue(nodeRef.current!, {
      duration: "standard",
      timing: "easeInOut",
      prop: "opacity",
    });
  }

  function handleExited() {
    // no-op
  }

  function handleExiting() {
    // no-op
  }

  return (
    <Transition
      appear
      in={open}
      nodeRef={nodeRef}
      timeout={DURATION}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
    >
      {(state: TransitionStatus) => (
        <div
          ref={nodeRef}
          onClick={onClick}
          style={{ ...STYLES[state] }}
          className={clsx(
            "opacity-0",
            className,
            state === "exited" && !open && "invisible"
          )}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
