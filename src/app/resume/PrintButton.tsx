"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => globalThis.print()}
      className="inline-flex items-center gap-2 border border-black bg-black px-4 py-2 text-sm font-black text-white transition hover:bg-[#B9F227] hover:text-black"
    >
      <Printer size={16} />
      Print / Save PDF
    </button>
  );
}
