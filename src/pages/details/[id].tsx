import { useRouter } from 'next/dist/client/router';
import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { GetServerSideProps } from 'next';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { getReviewById } from '@/api/review';
import { IReview } from '@/shared/types';
import { ReviewCard, ReviewRating } from '@/shared/styled';

function ReveiwDetailsPage() {
  const {
    query: { id },
  } = useRouter();
  const { data, isLoading, isError, error }: UseQueryResult<IReview, Error> = useQuery<
    IReview,
    Error
  >(['review', id], () => getReviewById(id), {
    enabled: !!id, //id가 true일 때만 실행시킴
  });

  if (isLoading) return <div>loading...</div>;
  if (isError && error) return <div>Error :( {error.message}</div>;
  return (
    <div>
      {data && (
        <ReviewCard>
          <ReviewRating>{data.rating}</ReviewRating>
          <h2>{data.title}</h2>
          {data.categories?.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}

          <p>{data.body}</p>
        </ReviewCard>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context,
): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const { id } = context.query;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['review', id], () => getReviewById(id));
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default ReveiwDetailsPage;
