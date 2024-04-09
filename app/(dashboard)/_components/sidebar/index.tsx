import { OrgList } from "./org-list";
import { NewOrgButton } from "./new-org-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-transparent ">
      <OrgList />
      <NewOrgButton />
    </aside>
  );
};
