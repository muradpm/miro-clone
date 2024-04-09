import { Search } from "lucide-react";

export const EmptySearchState = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <Search className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-semibold mt-6">No results found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};
