export const clickableCss = () => ({
  cursor: "pointer",
  userSelect: "none",
  position: "relative",
  "> *": { pointerEvents: "none" },
})
