export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDiscount(discount: string) {
  return `Up to ${discount} Off`;
}
