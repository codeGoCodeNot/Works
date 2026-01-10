import React from "react";
import { Suspense } from "react";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading Admin...</div>}>{children}</Suspense>
    </div>
  );
}
