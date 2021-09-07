import { IPerson } from "@/shared/types";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<IPerson>): void => {
  const data: IPerson = req.body;
  res.status(200).json(data);
};
