const choices = [rock, paper, scissors]

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const computerChoice = () => {
    let choiceIndex = getRandomInt(0, 2)
    return choices[choiceIndex]
}