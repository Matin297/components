"use client";

import clsx from "clsx";
import Paper from "./paper";
import { type Anchor, setTranslateValue } from "./utils";
import { useRef, PropsWithChildren, useEffect } from "react";
import { Transition, type TransitionStatus } from "react-transition-group";

const DURATION = 300;

interface SlideTransitionProps extends PropsWithChildren {
  open: boolean;
  anchor: Anchor;
  className: string;
}

export default function SlideTransition({
  open,
  anchor,
  children,
  className,
}: SlideTransitionProps) {
  const paperRef = useRef<HTMLDivElement>(null);

  function handleEnter() {
    // no-op
  }
  function handleEntering() {
    setTranslateValue(paperRef.current!);
  }
  function handleEntered() {
    // no-op
  }

  function handleExit() {
    // no-op
  }
  function handleExiting() {
    setTranslateValue(paperRef.current!, anchor);
  }
  function handleExited() {
    // no-op
  }

  useEffect(() => {
    setTranslateValue(paperRef.current!, anchor);
  }, [anchor]);

  return (
    <Transition
      in={open}
      nodeRef={paperRef}
      timeout={DURATION}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
    >
      {(state: TransitionStatus) => (
        <Paper
          anchor={anchor}
          ref={paperRef}
          className={clsx(
            className,
            state === "exited" && !open && "invisible",
            "transition-transform duration-300 ease-in-out"
          )}
        >
          {children}
        </Paper>
      )}
    </Transition>
  );
}
