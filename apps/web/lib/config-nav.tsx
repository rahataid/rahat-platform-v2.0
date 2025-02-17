import { defaultNavigations } from '@/routes/paths';
import * as li from 'lucide-react';
import { useMemo } from 'react';

interface NavItem {
  title: string;
  path: string;
  icon: keyof typeof li;
}

function sanitizeNavData(data: any) {
  return data?.map((item: any) => {
    return {
      title: item.TITLE,
      path: item.PATH,
    };
  });
}

export function useNavData() {
  const data: NavItem[] = useMemo(() => {
    const combinedNavSet = new Set([...defaultNavigations]);
    return Array.from(combinedNavSet);
  }, []);

  // const subData: NavItem[] = useMemo(() => {
  //   const navSubDataSet = new Set((navSubData as NavItem[]) || []);
  //   const combinedSubNavSet = new Set([
  //     ...defaultSubNavigations,
  //     ...navSubDataSet,
  //   ]);
  //   return Array.from(combinedSubNavSet);
  // }, [navSubData]);

  return { data };
}
