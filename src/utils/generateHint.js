const getRandomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateHint = (lastGuess, combo, max) => {
  const guessArr = lastGuess.split('');
  const comboArr = combo.split('');
  const guessSet = new Set(guessArr);
  const comboSet = new Set(comboArr);

  const guessNotCombo = [...guessSet].filter((n) => !comboSet.has(n));

  /* no numbers in the guess in the combo,
   * or the combo has more unique numbers
   * than the guess */
  if (
    guessNotCombo.length === guessSet.size
    || comboSet.size > guessSet.size
  ) {
    const mergedSets = [...guessSet, ...comboSet];
    const notGuessOrCombo = [];
    for (let i = 0; i < max; i += 1) {
      if (mergedSets.indexOf(i.toString()) === -1) {
        notGuessOrCombo.push(i);
      }
    }
    const num = getRandomNum(notGuessOrCombo);
    return `${num} is not in the code.`;
  }

  // some numbers in the guess are not in the combo
  if (guessNotCombo.length > 0) {
    const num = getRandomNum(guessNotCombo);
    return `${num} is not in the code.`;
  }

  // some misplaced numbers
  const wrongLocations = [];
  for (let i = 0; i < max; i += 1) {
    if (guessArr[i] !== comboArr[i]) {
      wrongLocations.push(i);
    }
  }
  if (wrongLocations.length <= 3) {
    const index = getRandomNum(wrongLocations);
    return `Place #${index + 1} is incorrect.`;
  }
  // all wrong placements
  const index = getRandomNum(wrongLocations);
  return `Place #${index + 1} is ${comboArr[index]}.`;
};

export default generateHint;
