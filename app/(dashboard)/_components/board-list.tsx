"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import { EmptyBoardsState } from "./empty-boards-state";
import { EmptySearchState } from "./empty-search-state";
import { EmptyFavoritesState } from "./empty-favorites-state";
import { BoardCard } from "./board-card";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.getBoards, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data?.length && query.search) {
    return <EmptySearchState />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavoritesState />;
  }

  if (!data?.length) {
    return <EmptyBoardsState />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};
