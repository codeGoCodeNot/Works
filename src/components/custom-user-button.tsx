"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { LucideBuilding } from "lucide-react";

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
    </UserButton>
  );
};

export default CustomUserButton;
