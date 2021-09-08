import { QueryClient, useQuery, UseQueryResult } from 'react-query';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import Link from 'next/link';

import { getCategories } from '@/api/review';
import { ICategory } from '@/shared/types';

function HeaderComponent() {
  const { data, isError, isLoading, error }: UseQueryResult<ICategory[], Error> = useQuery<
    ICategory[],
    Error
  >('category', getCategories);

  return (
    <Header>
      <Link href="/">
        <a>
          <h1>Minsoo Reviews</h1>
        </a>
      </Link>

      <nav>
        <span>Filter reviews by categories : </span>
        {isLoading && <span>Loading Category...</span>}
        {isError && error && <span>Error : {error.message}</span>}
        {data &&
          data.map((category) => (
            <Link key={category.id} href="/category/[id]" as={`/category/${category.id}`}>
              <a> {category.name}</a>
            </Link>
          ))}
      </nav>
    </Header>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('category', getCategories);
  return { props: { dehydratedState: dehydrate(queryClient) } };
};

const Header = styled.header`
  a {
    ${({ theme }) => theme.font.xlarge}
  }
  color: #8e2ad6;
  padding-bottom: 10px;
  border-bottom: 2px solid;

  nav {
    text-align: right;
  }
  nav a {
    ${({ theme }) => theme.font.small}
    margin-left: 10px;
  }
`;

export default HeaderComponent;
