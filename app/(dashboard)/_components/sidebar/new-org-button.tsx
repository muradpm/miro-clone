"use client";

import { Plus } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";

import { CreateOrganization } from "@clerk/nextjs";

export const NewOrg = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Hint
          label="Create organization"
          side="right"
          align="start"
          sideOffset={18}
        >
          <div className="aspect-square">
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </div>
        </Hint>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px] justify-center items-center">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
