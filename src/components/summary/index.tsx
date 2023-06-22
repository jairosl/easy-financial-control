import { CardSummary } from "../cards";

interface SummaryProps {
  comeIn: number;
  comeOut: number;
}

export function Summary({ comeIn, comeOut }: SummaryProps) {
  return (
    <div className="flex items-center gap-8">
      <CardSummary label="Entradas" type="comeIn" value={comeIn} />
      <CardSummary label="Saídas" type="comeOut" value={comeOut} />
      <CardSummary label="Total" type="total" value={comeIn - comeOut} />
    </div>
  );
}
