"use client";

import { Plus, LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-gray-600 rounded-lg hover:bg-gray-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "opacity-75 hover:bg-gray-600 cursor-not-allowed"
      )}
    >
      {pending ? (
        <LoaderCircle className="animate-spin h-6 w-6 text-white" />
      ) : (
        <Plus className="h-6 w-6 text-white" />
      )}
      <p className="mt-2 text-sm text-white">New board</p>
    </button>
  );
};
