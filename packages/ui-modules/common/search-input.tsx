'use client';

import { Input } from '@rumsan/shadcn-ui/components/input';
import { cn } from '@rumsan/shadcn-ui/lib/utils';
import { Search } from 'lucide-react';
import * as React from 'react';

type IProps = {
  name: string;
  className?: string;
  onSearch:
    | VoidFunction
    | ((event: React.ChangeEvent<HTMLInputElement>) => void);
  isDisabled?: boolean;
  value?: string;
};

export default function SearchInput({
  name,
  className,
  onSearch,
  isDisabled = false,
  value,
}: IProps) {
  return (
    <div className={cn('relative', className)}>
      <Search
        size={18}
        strokeWidth={2.5}
        className="absolute left-2 top-3 text-muted-foreground text-red-400"
      />
      <Input
        name={name}
        placeholder={`Search ${name}...`}
        className="pl-8  focus-visible:ring-0 focus-visible:ring-offset-0"
        value={value}
        onChange={onSearch}
        disabled={isDisabled}
      />
    </div>
  );
}
