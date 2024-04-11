"use client";

import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";

import { Button } from "@/components/ui/button";

import { CircuitBoard, Plus, LoaderCircle } from "lucide-react";

export const EmptyBoardsState = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      title: "Untitled",
      orgId: organization.id,
    });
  };

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
        <Button onClick={onClick} disabled={pending}>
          {pending ? (
            <LoaderCircle className="animate-spin w-4 h-4 mr-2" />
          ) : (
            <Plus className="w-4 h-4 mr-2" />
          )}
          Create board
        </Button>
      </div>
    </div>
  );
};
