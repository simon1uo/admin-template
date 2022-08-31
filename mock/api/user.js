import { resolveToken } from '../utils'

const users = {
  admin: {
    id: 1,
    name: 'admin',
    email: 'simon1uo@163.com',
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: 'editor',
    email: 'simon1uo@163.com',
    role: ['editor'],
  },
  guest: {
    id: 3,
    name: 'guest',
    role: [],
  },
}

export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorizaiton)
      return {
        code: 0,
        data: {
          ...headers(users[token] || users.guest),
        },
      }
    },
  },
]
