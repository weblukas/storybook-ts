export default interface IBadge {
  color?: "selected" | "notification";
  label: string;
  // children: object;
  size?: "large" | "medium" | "small" | "x-small";
  backgroundColor?: string;
}
