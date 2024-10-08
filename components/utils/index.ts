// the direction the child node will enter from.
export const DIRECTION = {
  top: "down",
  bottom: "up",
  left: "right",
  right: "left",
} as const;

export type Anchor = "top" | "bottom" | "left" | "right";
export type DirectionType = (typeof DIRECTION)[Anchor];

export function getTranslateValue(direction?: DirectionType) {
  let translate = "";

  switch (direction) {
    case "right":
      translate = "translateX(-100%)";
      break;
    case "left":
      translate = "translateX(100%)";
      break;
    case "down":
      translate = "translateY(-100%)";
      break;
    case "up":
      translate = "translateY(100%)";
      break;
    default:
      translate = "none";
  }

  return translate;
}

export function setTranslateValue(node: HTMLElement, anchor?: Anchor) {
  const direction = anchor ? DIRECTION[anchor] : undefined;
  node.style.transform = getTranslateValue(direction);
}

export const TIMINGS = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
};

export const DURATIONS = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195,
};

type TransitionOptions = {
  prop?: string;
  timing: keyof typeof TIMINGS;
  duration: keyof typeof DURATIONS | number;
};

export function setTransitionValue(
  node: HTMLElement,
  options?: TransitionOptions
) {
  let transition = "";

  if (options) {
    transition = `${options.prop ?? "all"} ${
      typeof options.duration === "number"
        ? options.duration
        : DURATIONS[options.duration]
    }ms ${TIMINGS[options.timing] ?? options.timing}`;
  }

  node.style.transition = transition;
}
