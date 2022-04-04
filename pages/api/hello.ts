// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

interface Data {
  name: string;
}


import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({name: 'Franco'})
}
