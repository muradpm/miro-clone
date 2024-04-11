import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface FooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-3">
      <p className="text-sm font-medium truncate max-w-[calc(100%-20px)]">
        {title}
      </p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-gray-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("w-4 h-4", isFavorite && "fill-gray-600 text-gray-600")}
        />
      </button>
    </div>
  );
};
