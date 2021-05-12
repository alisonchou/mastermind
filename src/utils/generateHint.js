const getRandomNum = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateHint = (lastGuess, combo, max) => {
  const guessArr = lastGuess.split('');
  const comboArr = combo.split('');
  const guessSet = new Set(guessArr);
  const comboSet = new Set(comboArr);

  const guessNotCombo = [...guessSet].filter((n) => !comboSet.has(n));

  /* Case 1: no numbers in the guess are
   * in the combo, or the combo has more
   * unique numbers than the guess */
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
    /* Returns a number not in either array.
     * Without checking for combo vs guess
     * size, if the guess was 2111 and the
     * combo 1234, it would trigger Case 3b
     * and display a correct place, which
     * would give away too much. */
    const num = getRandomNum(notGuessOrCombo);
    return `${num} is not in the code.`;
  }

  /* Case 2: some numbers in the guess are
   * not in the combination */
  if (guessNotCombo.length > 0) {
    /* Returns a number that is in the guess
     * but not the combo since the player
     * is more far along */
    const num = getRandomNum(guessNotCombo);
    return `${num} is not in the code.`;
  }

  // Case 3: some misplaced numbers
  const wrongLocations = [];
  for (let i = 0; i < max; i += 1) {
    if (guessArr[i] !== comboArr[i]) {
      wrongLocations.push(i);
    }
  }
  // Case 3a: not all numbers are misplaced
  if (wrongLocations.length <= 3) {
    const index = getRandomNum(wrongLocations);
    return `Place #${index + 1} is incorrect.`;
  }
  // Case 3b: all numbers are misplaced
  const index = getRandomNum(wrongLocations);
  /* Returns a correct location since the player
   * already knows that they are all incorrect */
  return `Place #${index + 1} is ${comboArr[index]}.`;
};

export default generateHint;
