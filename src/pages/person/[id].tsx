import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import { IPerson } from "@/shared/types";
import { getPersonById } from "@/api/person";

function PersonDetailPage() {
  const {
    query: { id },
  } = useRouter();
  const { data, isLoading, isError, error } = useQuery<IPerson, Error>(["person", id], () => getPersonById(id), {
    enabled: !!id, //id가 true일 때만 실행시킴
  });

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

export default PersonDetailPage;
