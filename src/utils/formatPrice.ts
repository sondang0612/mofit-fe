function formatPrice(amount?: number, prefix?: string) {
  if (!amount) return "0₫";
  let formatted = Math.floor(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${prefix ? prefix : ""}${formatted}` + " ₫";
}

export { formatPrice };
