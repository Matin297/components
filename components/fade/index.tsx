"use client";

import clsx from "clsx";
import { PropsWithChildren, useRef } from "react";
import { setTransitionValue } from "@/components/utils";
import { Transition, type TransitionStatus } from "react-transition-group";

interface FadeProps extends PropsWithChildren {
  open: boolean;
  className?: string;
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
          className={clsx(
            "opacity-0",
            className,
            state === "exited" && !open && "invisible"
          )}
          style={{ ...STYLES[state] }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
