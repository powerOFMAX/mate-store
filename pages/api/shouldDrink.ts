import { NextApiResponse, NextApiRequest } from 'next'

const shouldDrink = async (req: NextApiRequest, res: NextApiResponse) => {
  const answer = Math.round(Math.random()) ? 'yes' : 'Of course'

  res.status(200).json({ data: answer, error: null })
}

export default shouldDrink
