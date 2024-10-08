"use client";

import clsx from "clsx";
import {
  type Anchor,
  setTranslateValue,
  setTransitionValue,
} from "@/components/utils";
import Paper from "@/components/paper";
import { useRef, PropsWithChildren, useEffect } from "react";
import { Transition, type TransitionStatus } from "react-transition-group";

const DURATION = 300;

export interface SlideTransitionProps extends PropsWithChildren {
  open: boolean;
  anchor: Anchor;
  className: string;
  onEnter?: () => void;
  onExited?: () => void;
}

export default function SlideTransition({
  open,
  anchor,
  onEnter,
  children,
  onExited,
  className,
}: SlideTransitionProps) {
  const paperRef = useRef<HTMLDivElement>(null);

  function handleEnter() {
    setTranslateValue(paperRef.current!, anchor);

    // requesting reflow !!!!!
    (() => paperRef.current!.scrollTop)();

    // no-op
    if (onEnter) {
      onEnter();
    }
  }
  function handleEntering() {
    setTransitionValue(paperRef.current!, {
      duration: "standard",
      timing: "easeInOut",
      prop: "transform",
    });
    setTranslateValue(paperRef.current!);
  }
  function handleEntered() {
    // no-op
  }

  function handleExit() {
    // no-op
    setTransitionValue(paperRef.current!, {
      duration: "standard",
      timing: "easeInOut",
      prop: "transform",
    });

    setTranslateValue(paperRef.current!, anchor);
  }
  function handleExiting() {
    // no-op
  }

  function handleExited() {
    // no-op
    setTransitionValue(paperRef.current!);

    if (onExited) {
      onExited();
    }
  }

  useEffect(() => {
    if (!open) setTranslateValue(paperRef.current!, anchor);
  }, [anchor, open]);

  return (
    <Transition
      appear
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
            state === "exited" && !open && "invisible"
          )}
        >
          {children}
        </Paper>
      )}
    </Transition>
  );
}
