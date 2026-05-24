import type { Metadata } from "next";
import SalaryCalculator from "@/components/SalaryCalculator";

export const metadata: Metadata = {
  title: "Kalkulator Gaji Bersih — EPF SOCSO EIS PCB 2024/2025",
  description: "Kira gaji bersih anda selepas potongan EPF 11%, SOCSO, EIS dan cukai pendapatan PCB. Mudah, percuma dan tepat.",
};

export default function HomePage() {
  return <SalaryCalculator />;
}
