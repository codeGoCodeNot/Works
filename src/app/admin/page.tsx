import SectionHeader from "@/components/section-header";
import getAdminProducts from "@/features/admin/actions/get-admin-products";
import AdminProductCard from "@/features/admin/components/admin-product-card";
import StatsCard from "@/features/admin/components/stats-card";

import { homePath } from "@/path";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { LucideShield } from "lucide-react";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const response = await clerkClient();
  const user = await response.users.getUser(userId!);

  console.log(user);

  const metadata = user.publicMetadata;
  const isAdmin = metadata.isAdmin ?? false;

  if (!isAdmin) {
    redirect(homePath());
  }

  const allProducts = await getAdminProducts();

  const approvedProducts = allProducts.filter(
    (product) => product.status === "approved"
  );

  const pendingProducts = allProducts.filter(
    (product) => product.status === "pending"
  );

  const rejectedProducts = allProducts.filter(
    (product) => product.status === "rejected"
  );

  return (
    <div className="py-20">
      <div className="wrapper">
        <div className="mb-10">
          <SectionHeader
            title="Product Admin"
            icon={<LucideShield className="text-gray-500 fill-gray-600" />}
            description="Manage your application"
          />
        </div>
        <StatsCard
          approved={approvedProducts.length}
          pending={pendingProducts.length}
          rejected={rejectedProducts.length}
          all={allProducts.length}
        />
        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Pending Products ({pendingProducts.length})
            </h2>
          </div>
          <div className="space-y-4">
            {pendingProducts.map((product) => (
              <AdminProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              All Products ({allProducts.length})
            </h2>
          </div>
          <div className="space-y-4">
            {allProducts.map((product) => (
              <AdminProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Rejected Products ({rejectedProducts.length})
            </h2>
          </div>
          <div className="space-y-4">
            {rejectedProducts.map((product) => (
              <AdminProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
