export { default as spacer } from "./spacer";
export { above, between } from "./mediaQueries";

export function setCSSVariables(variables: { [key: string]: string }) {
  const keys = Object.keys(variables);
  keys.forEach((key) => {
    document.documentElement.style.setProperty(`--${key}`, variables[key]);
  });
}
