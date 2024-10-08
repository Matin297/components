"use client";

/** We need to manage the transitions an such */
import { useModal } from "@/components/modal/modal-context";
import Slide, { SlideTransitionProps } from "@/components/slide";

export default function ModalSlide({
  onEnter,
  onExited,
  ...props
}: SlideTransitionProps) {
  const { setExited } = useModal();

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

  return <Slide onEnter={handleEnter} onExited={handleExited} {...props} />;
}
