"use client";

import Link from "next/link";
import Image from "next/image";

import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

import { MoreHorizontal } from "lucide-react";

import { formatDistanceToNow } from "date-fns";

import { Overlay } from "./overlay";
import { Footer } from "./footer";

import { useAuth } from "@clerk/nextjs";
import { BoardActions } from "@/components/board-actions";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel =
    userId === authorId ? "Modified by me" : `Modified by ${authorName}`;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const { mutate: onFavorite, pending: onFavoritePending } = useApiMutation(
    api.board.toggleFavorite
  );

  const { mutate: onUnfavorite, pending: onUnfavoritePending } = useApiMutation(
    api.board.toggleUnfavorite
  );

  const handleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id })
        .then(() => toast.success(`Board is unfavorited`))
        .catch(() => toast.error("Failed to unfavorite"));
    } else {
      onFavorite({ id, orgId })
        .then(() => toast.success(`Board is favorited`))
        .catch(() => toast.error("Failed to favorite"));
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <BoardActions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </BoardActions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={handleFavorite}
          disabled={onFavoritePending || onUnfavoritePending}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
