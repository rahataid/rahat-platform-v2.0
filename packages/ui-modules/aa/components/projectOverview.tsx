import { Button } from '@rumsan/shadcn-ui/components/button';
import { useParams } from 'next/navigation';

export default function ProjectOverview() {
  const { segments } = useParams();
  const projectId = segments?.[segments.length - 1];
  return (
    <>
      <h1 className="text-red-400">AA Project Overview : {projectId}</h1>
      <Button>Open Projects</Button>;
    </>
  );
}
