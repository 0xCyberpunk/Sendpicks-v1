import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=8ff9212d03e8437393997ea716d1e54e');
    const currentWeek = response.data;
    res.status(200).json({ currentWeek });
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: message });
  }
}

export default handler;
