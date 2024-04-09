"use client";

import { EmptyBoardsState } from "./empty-boards-state";
import { EmptySearchState } from "./empty-search-state";
import { EmptyFavoritesState } from "./empty-favorites-state";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // TODO: change to API call

  if (!data?.length && query.search) {
    return <EmptySearchState />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavoritesState />;
  }

  if (!data?.length) {
    return <EmptyBoardsState />;
  }

  return <div>{JSON.stringify(query)}</div>;
};
