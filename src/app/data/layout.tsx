import { SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";
import Loading from "./loading";
import { AppSidebar } from "@/components/AppSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </SidebarProvider>
  );
}
