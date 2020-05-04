import { rem, em } from "polished";

type Unit = "rem" | "em" | "px";

export default function spacer(multiplier = 1, unit: Unit = "rem") {
  const spacerValue = 8 * multiplier;

  if (unit === "px") {
    return `${spacerValue}px`;
  }
  if (unit === "em") {
    return em(`${spacerValue}px`);
  }

  return rem(`${spacerValue}px`);
}
