import { useQuery } from 'react-query';
import { IPerson } from '@/shared/types';
import { getPerson } from '@/api/person';

function PersonComponent() {
  const { data, isLoading, isError, error } = useQuery<IPerson, Error>('person', getPerson);
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error :( {error?.message}</div>;
  return (
    <div>
      <div>{data?.id}</div>
      <div>{data?.name}</div>
      <div>{data?.age}</div>
    </div>
  );
}

export default PersonComponent;
