export const formatterDate = new Intl.DateTimeFormat("pt-br", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export const formatterCurrency = new Intl.NumberFormat("pt-br", {
  currency: "BRL",
  style: "currency",
});
