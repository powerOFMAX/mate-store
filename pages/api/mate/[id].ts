import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
import enablePublicAccess from '@cors'

const mateById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Don't use in prod
    await enablePublicAccess(req, res)

    const db = new DB()
    const mateId = req.query.id as string

    const mate = await db.getById(mateId)

    res.status(200).json(mate)
  } catch (err) {
    console.error(err)
    res.status(404).end()
  }
}

export default mateById
