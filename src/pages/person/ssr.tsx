import { GetServerSideProps } from "next";
import { UseQueryResult, useQuery, QueryClient } from "react-query";
import { dehydrate, DehydratedState } from "react-query/hydration";
import { IPerson } from "@/shared/types";
import { getPerson } from "@/api/person";

function HydrationExamplePage() {
  const { data, isLoading, isError, error }: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>("person", getPerson);

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

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("person", getPerson);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export default HydrationExamplePage;
