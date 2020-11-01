import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import enablePublicAccess from '@cors'

const allMates = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Don't use in prod
    await enablePublicAccess(req, res)

    const db = new DB()
    const entries = await db.getAll()

    res.status(200).json({ data: entries })
  } catch (err) {
    console.error(err)
    res.status(404).end()
  }
}

export default allMates
