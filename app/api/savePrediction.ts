import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { PrismaClient, Prediction } from '@prisma/client';

const prisma = new PrismaClient();
const API_ENDPOINT = `https://baker-api.sportsdata.io/baker/v2/nfl/projections/players/2023REG/4/stat/passing_yards/avg?key=${process.env.SPORTS_DATA_API_KEY}&limit=20`;


interface ApiPrediction {
  name: string;
  player_id: number;
  position: string;
  team: string;
  value: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    const { data } = await axios.get<ApiPrediction[]>(API_ENDPOINT);
    
    if (!Array.isArray(data)) {
        return res.status(500).json({ message: 'Expected array from API but received something else' });
    }

    const predictions = data.map((prediction: ApiPrediction) => {
      return {
        playerName: prediction.name,
        team: prediction.team,
        position: prediction.position,
        statType: 'passing_yards',
        statValue: prediction.value,
        predictionOn: true,
        sportId: "nfl", // Ensure this is the correct value and the corresponding sport exists in your Sport table
      };
    });
    
    // This should satisfy the expectations of prisma.prediction.create
    const createdPredictions = await prisma.$transaction(predictions.map(prediction => prisma.prediction.create({ data: prediction })));
    
    res.status(200).json(createdPredictions);
} catch (error: any) {
    console.error('Error fetching or saving predictions:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
} finally {
    await prisma.$disconnect();
}
}