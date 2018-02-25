const createDog = (name, description, age, height) => ({
  name, description, age, height
})

export default {
  user: {
    name: 'jeanne',
    email: 'jeanne.dupont@gmail.com',
    likesDogs: true
  },
  dogs: [
    createDog('robert', 'great dane', 6, 30),
    createDog('alice', 'funny jack russell', 3, 40),
    createDog('aliénor', 'big but nice dog', 12, 90),
    createDog('maurice', 'in love with rabbits', 2, 30),
    createDog('michel', 'actually a robot', 8, 60),
    createDog('jean-mi', 'michels lover', 10, 90),
    createDog('huguette', 'crazy doggo', 11, 120),
    createDog('noémie', 'very sweet with children', 7, 50),
    createDog('huberte', 'eats bugs', 8, 50),
    createDog('momo', 'likes running in the woods', 1, 40)
  ]
}
