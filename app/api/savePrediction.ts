/* import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient();
const API_ENDPOINT = `https://baker-api.sportsdata.io/baker/v2/nfl/projections/players/2023REG/4/stat/passing_yards/avg?key=${process.env.SPORTS_DATA_API_KEY}&limit=20`;


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  
  try {
    const { data } = await axios.get(API_ENDPOINT);
    
    // Assuming each object in `data` array is a prediction
    
    const predictions: Partial<Prediction>[] = data.map((prediction: any) => ({
      playerName: prediction.playerName,
      team: prediction.team,
      position: prediction.position,
      statType: 'passing_yards',
      statValue: prediction.statValue,
      weekOpponent: prediction.weekOpponent,
      gameTime: new Date(prediction.gameTime),
      predictionOn: true,
      sportId: undefined, // Set sportId to undefined
    }));
    
    const createdPredictions = await prisma.$transaction(predictions.map(prediction => prisma.prediction.create({ data: prediction })));
    
    res.status(200).json(createdPredictions);
  } catch (error: any) {
    console.error('Error fetching or saving predictions:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
*/