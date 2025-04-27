import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Link href="/">
        <Button className="fixed top-2 left-2" variant="ghost">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      {children}
    </div>
  );
}
