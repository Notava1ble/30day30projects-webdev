import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2Icon className="animate-spin size-12" />
    </div>
  );
}
