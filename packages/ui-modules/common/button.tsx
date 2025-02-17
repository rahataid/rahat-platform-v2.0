"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      className={className}
      onClick={() => router.push(`/${appName}`)}
    >
      {children}
    </button>
  );
};
