"use client";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from "@phosphor-icons/react";

interface CardSummaryProps {
  value: number;
  label: string;
  type: "comeIn" | "comeOut" | "total";
}

export function CardSummary({ label, value, type }: CardSummaryProps) {
  const IconByType = {
    comeOut: <ArrowCircleDown size={32} color="#FF3835" />,
    comeIn: <ArrowCircleUp size={32} color="#0B4C26" />,
    total: <CurrencyDollar size={32} color="#11C770" />,
  };

  return (
    <div className="p-6 pr-8 flex-1 bg-white rounded-md">
      <div className="flex items-center justify-between mb-3">
        <span className="block text-[1rem] leading-[160%]">{label}</span>
        {IconByType[type]}
      </div>
      <p className="text-black text-[2rem] leading-[140%]">{value}</p>
    </div>
  );
}
