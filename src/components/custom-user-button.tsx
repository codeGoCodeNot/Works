"use client";

import { adminPath } from "@/path";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { LucideBuilding, LucideBuilding2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const CustomUserButton = () => {
  return (
    <UserButton>
      <UserButton.UserProfilePage
        label="Organizations"
        labelIcon={<LucideBuilding />}
        url="organization"
      >
        <div className="p-4">
          <h2>Manage Organizations</h2>
          <OrganizationSwitcher
            hidePersonal={true}
            afterCreateOrganizationUrl={"/submit"}
            afterSelectOrganizationUrl={"/submit"}
            appearance={{ elements: { rootBox: "w-full" } }}
          />
        </div>
      </UserButton.UserProfilePage>

      <UserButton.UserProfilePage
        label="Admin"
        labelIcon={<LucideBuilding2 />}
        url={adminPath()}
      >
        <div className="p-4">
          <h2>Admin Panel</h2>
          <Link href={adminPath()} className="w-full flex justify-start">
            <Button size="default" variant="secondary">
              Go to admin
            </Button>
          </Link>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
};

export default CustomUserButton;
