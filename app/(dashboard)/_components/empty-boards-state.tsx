import { Button } from "@/components/ui/button";

import { CircuitBoard } from "lucide-react";

export const EmptyBoardsState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <CircuitBoard className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        You haven&apos;t created any boards yet
      </p>
      <div className="mt-6">
        <Button size="lg">Create board</Button>
      </div>
    </div>
  );
};
