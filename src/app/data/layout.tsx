import { SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </SidebarProvider>
  );
}
