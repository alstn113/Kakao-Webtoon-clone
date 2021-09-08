import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { IReview } from '@/shared/types';
import { getReviews } from '@/api/review';
import { ReviewCard, ReviewRating } from '@/shared/styled';

const Home = () => {
  const { data, isError, isLoading, error }: UseQueryResult<IReview[], Error> = useQuery<
    IReview[],
    Error
  >('review', getReviews);

  if (isLoading) return <div>loading...</div>;
  if (isError && error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div>
        {data &&
          data.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewRating>{review.rating}</ReviewRating>
              <h2>{review.title}</h2>
              {review.categories?.map((c) => (
                <small key={c.id}>{c.name}</small>
              ))}
              <p>{review.body.substring(0, 100)}</p>
              <Link href="/details/[id]" as={`/details/${review.id}`}>
                <a> Read More</a>
              </Link>
            </ReviewCard>
          ))}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('review', getReviews);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default Home;
