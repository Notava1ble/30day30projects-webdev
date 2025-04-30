import { Loader2Icon } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <Loader2Icon className="animate-spin" />
    </div>
  );
}
