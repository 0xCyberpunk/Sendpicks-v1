import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from "@/lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const predictions = await prisma.prediction.findMany();
    // console.log('Retrieved predictions:', predictions);
    res.status(200).json({ predictions });
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: message });
  }
}

export default handler;
