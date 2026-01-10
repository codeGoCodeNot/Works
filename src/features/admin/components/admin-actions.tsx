"use client";

import { ProductCardProps } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { LucideCheck, LucideXCircle } from "lucide-react";
import { rejectProductAction } from "../actions/reject-product-action";
import { approveProductAction } from "../actions/approve-product-action";

type AdminActionsProps = {
  status: string;
  productId: ProductCardProps["id"];
};

const AdminActions = ({ status, productId }: AdminActionsProps) => {
  const handleApprove = async () => {
    await approveProductAction(productId);
  };

  const handleReject = async () => {
    await rejectProductAction(productId);
  };

  return (
    <div className="space-y-2">
      {status === "pending" && (
        <div className="flex gap-x-2">
          <Button variant="default" onClick={handleApprove}>
            <LucideCheck />
            Approve
          </Button>
          <Button variant="destructive" onClick={handleReject}>
            <LucideXCircle />
            Reject
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminActions;
