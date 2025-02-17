'use client';

import { paths } from '@/routes/paths';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@rumsan/shadcn-ui/components/avatar';
import { Badge } from '@rumsan/shadcn-ui/components/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from '@rumsan/shadcn-ui/components/dropdown-menu';
import { Separator } from '@rumsan/shadcn-ui/components/separator';

import Link from 'next/link';

export function Nav({ hasDefaultHeader = true }) {
  const handleLogout = () => {
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    hasDefaultHeader && (
      <div className="h-14 fixed w-[calc(100vw-56px)] flex justify-between gap-4 items-center p-2 border-b">
        <div className="flex space-x-2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="profile-icon"
                  className="rounded-3xl"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mr-5 text-muted-foreground text-sm"
              side="bottom"
            >
              <DropdownMenuGroup className="p-2 flex flex-col">
                <div className="flex flex-col mb-1">
                  <span className="font-medium">{'John Doe'}</span>
                  <span>{'doe@john.com'}</span>
                </div>
                <Separator />
                <Link
                  className="p-1 hover:bg-secondary rounded"
                  href={paths.profile.root}
                >
                  Profile
                </Link>
                <Link
                  className="p-1 hover:bg-secondary rounded"
                  href={paths.dashboard.root}
                >
                  Home
                </Link>
                <Link
                  className="p-1 hover:bg-secondary rounded"
                  href={paths.settings.root}
                >
                  Settings
                </Link>
                {/* <ThemeSwitch /> */}
                <Badge
                  className="mt-2 rounded bg-primary text-white hover:border hover:cursor-pointer w-full p-1 flex justify-center"
                  onClick={handleLogout}
                >
                  Logout
                </Badge>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  );
}
