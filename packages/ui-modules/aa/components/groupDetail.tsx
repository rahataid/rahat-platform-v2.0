import { useParams } from 'next/navigation';

export default function GroupDetail() {
  const { segments } = useParams();
  const groupId = segments?.[segments.length - 1];
  return <div>Group Detail: {groupId}</div>;
}
