"use client";

import downvoteProductAction from "@/features/products/actions/downvote-product-action";
import upvoteProductAction from "@/features/products/actions/upvote-product-action";
import { cn } from "@/lib/utils";
import { LucideChevronDown, LucideChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";

type VotingButtonsProps = {
  productId: string;
  voteCount: number;
};

const VotingButtons = ({ productId, voteCount }: VotingButtonsProps) => {
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const [currentVoteCount, setCurrentVoteCount] = useState(voteCount);

  const handleUpvote = async () => {
    if (hasUpvoted) return;
    setHasUpvoted(true);
    setHasDownvoted(false); // Optional: reset downvote if you want strict "one or the other"
    setCurrentVoteCount((prev) => prev + 1);
    await upvoteProductAction(productId);
  };

  const handleDownvote = async () => {
    if (hasUpvoted) {
      setHasDownvoted(true);
      setHasUpvoted(false);
      setCurrentVoteCount((prev) => prev - 1);
      await downvoteProductAction(productId);
    }
  };

  return (
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
        className="text-primary"
        disabled={hasUpvoted}
      >
        <LucideChevronUp />
      </Button>
      <span className="text-sm font-semibold transition-colors text-foreground">
        {currentVoteCount}
      </span>
      <Button
        onClick={handleDownvote}
        variant="ghost"
        size="icon-sm"
        className="text-primary"
        disabled={hasDownvoted}
      >
        <LucideChevronDown />
      </Button>
    </div>
  );
};

export default VotingButtons;
