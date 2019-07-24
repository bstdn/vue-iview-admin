import Mock from 'mockjs'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    name: 'Super Admin',
    user_id: '1',
    access: ['admin'],
    avatar: Mock.Random.image('40x40', '#409EFF', 'Avatar')
  },
  'editor-token': {
    name: 'Editor',
    user_id: '2',
    access: ['editor'],
    avatar: Mock.Random.image('40x40', '#409EFF', 'Avatar')
  }
}

export default [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      return { token: tokens[username].token }
    }
  },
  {
    url: '/user/info',
    type: 'get',
    response: config => {
      const { token } = config.query
      return users[token]
    }
  }
]
