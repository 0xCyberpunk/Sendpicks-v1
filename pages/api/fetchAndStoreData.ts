import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from "@/lib/prisma";




const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { currentWeek } = req.body;  // Assume currentWeek is passed in the request body
    const statTypes = ['rushing_yards', 'passing_yards', 'receiving_yards'];
    
    for (const statType of statTypes) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const response = await axios.get(`https://baker-api.sportsdata.io/baker/v2/nfl/projections/players/2023REG/${currentWeek}/stat/${statType}/avg?key=${process.env.SPORTS_DATA_API_KEY}&limit=20`);

      const players = response.data;
      
      for (const player of players) {
        await prisma.prediction.create({
          data: {
            playerName: player.name,
            player_id: player.player_id,
            team: player.team,
            position: player.position,
            statType,
            statValue: player.value,
            week: currentWeek,
            current_season: '2023REG',
          },
        });
        console.log('Data stored successfully');
      }
    }
    
    res.status(200).json({ message: 'Data fetched and stored successfully' });
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: message });
  }
}

export default handler;
