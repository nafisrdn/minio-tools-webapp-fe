import User from '../models/User';

export default function generateUsers() {
  const users = [
    new User({
      id: 'a',
      accessKey: 'user.nafis',
      policies: ['a', 'b'],
      generateId: true
    }),
    new User({
      id: 's',
      accessKey: 'user.jhon',
      policies: ['c'],
      generateId: true
    }),
    new User({
      id: 'd',
      accessKey: 'user.bob',
      policies: ['d', 'f'],
      generateId: true
    }),
    new User({
      id: 'f',
      accessKey: 'user.jessica',
      policies: ['a', 'f'],
      generateId: true
    }),
    new User({
      id: 'g',
      accessKey: 'user.william',
      policies: ['b'],
      generateId: true
    })
  ];

  return users;
}
