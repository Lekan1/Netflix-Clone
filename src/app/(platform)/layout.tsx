"use client";

import { ClerkProvider } from "@clerk/nextjs";

import { QueryProvider } from "@/components/providers/query-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>{children}</QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
