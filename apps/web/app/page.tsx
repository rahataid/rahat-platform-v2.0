// 'use client';

// import { Button } from '@rumsan/shadcn-ui/components/button';
// import { useRouter } from 'next/navigation';

// export default function Page() {
//   const router = useRouter();
//   return (
//     <div className="flex items-center justify-center min-h-svh">
//       <div className="flex flex-col items-center justify-center gap-4">
//         <h1 className="text-2xl font-bold">Hello World</h1>
//         <Button size="sm" onClick={() => router.push('/demo')}>
//           Go to Demo
//         </Button>
//       </div>
//     </div>
//   );
// }

import { Button } from '@repo/ui/button';

export default function Home() {
  return <Button appName="projects">Open Projects</Button>;
}
