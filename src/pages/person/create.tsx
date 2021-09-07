import { createPerson } from "@/api/person";
import { IPerson } from "@/shared/types";
import PersonComponent from "@/components/Person";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import React, { FormEventHandler } from "react";

interface ICreatePersonParams {
  id: string;
  name: string;
  age: number;
}

interface IContext {
  id: string;
}

function CreatePage() {
  const queryClient = useQueryClient();

  const mutation: UseMutationResult<IPerson, Error, ICreatePersonParams> = useMutation<IPerson, Error, ICreatePersonParams, IContext | undefined>(
    async ({ id, name, age }) => createPerson(id, name, age),
    {
      // before mutation
      onMutate: (variables: ICreatePersonParams) => {
        console.log("mutation variables", variables);
        return { id: "7" }; // option으로 context에 값 전달함
      },
      // on success of mutation
      onSuccess: (data: IPerson, _variables: ICreatePersonParams, _context: IContext | undefined) => {
        //queryClient.invalidateQueries("person"); //person 캐시를 다시 재실행시킴?
        queryClient.setQueryData("person", data);
        return console.log("mutation data", data);
      },
      // if mutation errors
      onError: (error: Error, _variables: ICreatePersonParams, context: IContext | undefined) => {
        console.log("error: ", error.message);
        return console.log(`rolling back optimistic update with id: ${context?.id}`);
      },
      // no matter if error or success run me
      onSettled: (_data: IPerson | undefined, _error: Error | null, _variables: ICreatePersonParams | undefined, _context: IContext | undefined) => {
        return console.log("complete mutation!");
      },
    }
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      age: { value: number };
    };
    const id = "1";
    const name = target.name.value;
    const age = target.age.value;
    mutation.mutate({ id, name, age });
  };

  return (
    <>
      {mutation.isLoading ? (
        <p>Adding todo</p>
      ) : (
        <>
          {mutation.isError ? <div>An error occurred: {mutation?.error?.message}</div> : null}

          {mutation.isSuccess ? (
            <div>
              Todo added! Person name is {mutation?.data?.name} and he is {mutation?.data?.age}
            </div>
          ) : null}
        </>
      )}

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" id="age" name="age" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <PersonComponent />
    </>
  );
}

export default CreatePage;
