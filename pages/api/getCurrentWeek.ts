import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=${process.env.SPORTS_DATA_API_KEY}`);

    console.log('API Response:', response.data);
    const currentWeek = response.data;
    res.status(200).json({ currentWeek });
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: message });
  }
}

export default handler;
