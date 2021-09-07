import { IPerson } from "@/shared/types";
import client from "@/utils/axios";

export async function getPerson(): Promise<IPerson> {
  const { data } = await client.get(`/api/person`);
  return data;
}

export async function getPersonById(id: string | string[] | undefined): Promise<IPerson> {
  if (typeof id === "string") {
    const { data } = await client.get(`/api/person/${id}`);
    return data;
  }
  throw new Error("invalidd id");
}

export async function createPerson(id: string, name: string, age: number): Promise<IPerson> {
  const { data } = await client.post("/api/person/create", {
    id,
    name,
    age,
  });
  return data;
}
