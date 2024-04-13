"use client";

import { connectionIdToColor } from "@/lib/utils";

import { UserAvatar } from "./user-avatar";

import { useSelf, useOthers } from "@/liveblocks.config";

const MAX_USER_AVATARS = 2; // Maximum number of user avatars to show excluding ourselves

export const Participants = () => {
  const mainUser = useSelf();
  const otherUsers = useOthers();
  const hasMoreUsers = otherUsers.length > MAX_USER_AVATARS;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md px-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {otherUsers.slice(0, MAX_USER_AVATARS).map(({ connectionId, info }) => (
          <UserAvatar
            borderColor={connectionIdToColor(connectionId)}
            key={connectionId}
            src={info?.picture}
            name={info?.name}
            fallback={info?.name?.[0] || ""}
          />
        ))}

        {mainUser && (
          <UserAvatar
            borderColor={connectionIdToColor(mainUser.connectionId)}
            src={mainUser.info?.picture}
            name={`${mainUser.info?.name} (You)`}
            fallback={mainUser.info?.name?.[0]}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${otherUsers.length - MAX_USER_AVATARS} more`}
            fallback={`+${otherUsers.length - MAX_USER_AVATARS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md px-3 flex items-center shadow-md w-[100px]" />
  );
};
