/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";

export interface FlagProps {
  countryCode: string;
  className?: string;
}

export function Flag({ countryCode, className }: FlagProps) {
  return (
    <img
      src={`https://flagsapi.com/${countryCode.toUpperCase()}/flat/64.png`}
      alt={countryCode}
      className={cn("h-6 w-6 relative inline-block", className)}
    />
  );
}
