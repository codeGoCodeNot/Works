"use client";

import { cn } from "@/lib/utils";
import { LucideChevronUp, LucideChevronDown } from "lucide-react";
import { Button } from "./button";
import upvoteProductAction from "@/features/products/actions/upvote-product-action";
import downvoteProductAction from "@/features/products/actions/downvote-product-action";

type VotingButtonsProps = {
  hasVoted: boolean;
  productId: string;
  voteCount: number;
};

const VotingButtons = ({
  hasVoted,
  productId,
  voteCount,
}: VotingButtonsProps) => {
  const handleUpvote = async () => {
    const result = await upvoteProductAction(productId);
    console.log(result);
  };

  const handleDownvote = async () => {
    const result = await downvoteProductAction(productId);
    console.log(result);
  };

  return (
    <>
      <div
        className="flex flex-col items-center"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Button
          onClick={handleUpvote}
          variant="ghost"
          size="icon-sm"
          className={cn(
            "text-primary",
            hasVoted
              ? "bg-primary/10 text-primary hover:bg-primary/20"
              : "hover:bg-primary/10 hover:text-primary"
          )}
        >
          <LucideChevronUp />
        </Button>
        <span className="text-sm font-semibold transition-colors text-foreground">
          5
        </span>
        <Button
          onClick={handleDownvote}
          variant="ghost"
          size="icon-sm"
          className={cn(
            "text-primary",
            hasVoted
              ? "hover:text-destructive"
              : "opacity-50 cursor-not-allowed"
          )}
        >
          <LucideChevronDown />
        </Button>
      </div>
    </>
  );
};

export default VotingButtons;
