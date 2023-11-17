import type { NextApiRequest, NextApiResponse } from 'next';
import { serverClient } from '@/sanity/client';

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const document = await serverClient.create({
        _type: 'contactSalesForm',
        ...req.body,
      });
      res.status(200).json({ message: 'Success', document });
    } catch (error) {
      console.error('Submission error', error);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}