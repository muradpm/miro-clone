import { Star } from "lucide-react";

export const EmptyFavoritesState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Star className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-semibold mt-6">No favorite boards</h2>
      <p className="text-muted-foreground text-sm mt-2">
        You haven&apos;t favorited any boards yet
      </p>
    </div>
  );
};
