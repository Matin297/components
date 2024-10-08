"use client";

/** We need to manage the transitions an such */
import { useModal } from "@/components/modal/modal-context";
import Slide, { SlideTransitionProps } from "@/components/slide";

export default function ModalSlide({
  onEnter,
  onExited,
  ...props
}: Omit<SlideTransitionProps, "open">) {
  const { setExited, open } = useModal();

  function handleEnter() {
    setExited(false);

    if (onEnter) {
      onEnter();
    }
  }

  function handleExited() {
    setExited(true);

    if (onExited) {
      onExited();
    }
  }

  return (
    <Slide
      open={open}
      onEnter={handleEnter}
      onExited={handleExited}
      {...props}
    />
  );
}
