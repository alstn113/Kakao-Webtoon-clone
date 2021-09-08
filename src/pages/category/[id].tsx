import { useRouter } from 'next/dist/client/router';
import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { GetServerSideProps } from 'next';
import Link from 'next/dist/client/link';
import { dehydrate, DehydratedState } from 'react-query/hydration';

import { getCategoryById } from '@/api/review';
import { ICategory } from '@/shared/types';
import { ReviewCard, ReviewRating } from '@/shared/styled';

function Category() {
  const {
    query: { id },
  } = useRouter();
  const { data, isError, isLoading, error }: UseQueryResult<ICategory, Error> = useQuery<
    ICategory,
    Error
  >(['category', id], () => getCategoryById(id), {
    enabled: !!id,
  });

  if (isLoading) return <div>loading...</div>;
  if (isError && error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data && (
        <div>
          <h2>{data.name}</h2>
          {data.reviews.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewRating>{review.rating}</ReviewRating>
              <h2>{review.title}</h2>
              <p>{review.body.substring(0, 100)}</p>
              <Link href="/details/[id]" as={`/details/${review.id}`}>
                <a> Read More</a>
              </Link>
            </ReviewCard>
          ))}
        </div>
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
  await queryClient.prefetchQuery(['category', id], () => getCategoryById(id));
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default Category;
