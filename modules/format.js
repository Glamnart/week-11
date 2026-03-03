export default function formatCurrency(amount, currency = "NGN") {
 return new Intl.NumberFormat("en-NG", { style: "currency", currency }).format(
    amount,
  );
}
