const createDog = (name, description, age, height, url) => ({
  name, description, age, height, url
})

export default {
  user: {
    name: 'jeanne',
    email: 'jeanne.dupont@gmail.com',
    likesDogs: true
  },
  dogs: [
    createDog('robert', 'great dane', 6, 30, 'https://placedog.net/500/280'),
    createDog('alice', 'funny jack russell', 3, 40, 'https://placedog.net/500/280'),
    createDog('aliénor', 'big but nice dog', 12, 90, 'https://placedog.net/500/280'),
    createDog('maurice', 'in love with rabbits', 2, 30, 'https://placedog.net/500/280'),
    createDog('michel', 'actually a robot', 8, 60, 'https://placedog.net/500/280'),
    createDog('jean-mi', 'michels lover', 10, 90, 'https://placedog.net/500/280'),
    createDog('huguette', 'crazy doggo', 11, 120, 'https://placedog.net/500/280'),
    createDog('noémie', 'very sweet with children', 7, 50, 'https://placedog.net/500/280'),
    createDog('huberte', 'eats bugs', 8, 50, 'https://placedog.net/500/280'),
    createDog('momo', 'likes running in the woods', 1, 40, 'https://placedog.net/500/280')
  ]
}
