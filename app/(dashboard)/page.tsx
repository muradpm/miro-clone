"use client";

import { EmptyOrgState } from "./_components/empty-org-state";

import { useOrganization } from "@clerk/nextjs";

const DashboardPage = () => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrgState /> : <p>Board List</p>}
    </div>
  );
};

export default DashboardPage;
