// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string
// }
// type é mais pesado na compilação. Usar interface.
// deu erro no Prettier:
// pages/api/hello.tsx
// [error] pages/api/hello.tsx: SyntaxError: '{' expected. (8:16)
// [error]    6 | // }
// [error]    7 | // type é mais pesado na compilação. Usar interface.
// [error] >  8 | interface Data = {
// [error]      |                ^
// [error]    9 |   name: string
// [error]   10 | }
// [error]   11 |
// interface Data = {
//   name: string
// }
// deixando como estava antes:
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}
