import { IPerson } from "@/shared/types";
import { NextApiRequest, NextApiResponse } from "next";

export default (_req: NextApiRequest, res: NextApiResponse<IPerson>): void => {
  console.log("getting person");
  res.status(200).json({ id: "1", name: "John Doe", age: 25 });
};
