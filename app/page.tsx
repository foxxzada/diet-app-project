import React from "react";
import DashTable from "@/components/DashTable";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

export default function page() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashTable />
    </QueryClientProvider>
  );
}
