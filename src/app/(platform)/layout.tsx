"use client";

import { ClerkProvider } from "@clerk/nextjs";

import { QueryProvider } from "@/components/providers/query-provider";
import { Suspense } from "react";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Suspense>{children}</Suspense>
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
