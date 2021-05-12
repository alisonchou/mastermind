const generateClues = (guess, combo) => {
  let correctNums = 0;
  let correctPlacements = 0;
  const guessArr = guess.split('');
  const comboArr = combo.split('');
  for (let i = 0; i < 4; i += 1) {
    if (guessArr[i] === comboArr[i]) {
      correctPlacements += 1;
      /* Removes number from both arrays because
       * "Correct Numbers" should only include numbers
       * not already matched in "Correct Placements" */
      guessArr[i] = '';
      comboArr[i] = '';
    }
  }
  for (let i = 0; i < 4; i += 1) {
    if (guessArr[i] !== '') {
      const comboIndex = comboArr.indexOf(guessArr[i]);
      if (comboIndex !== -1) {
        correctNums += 1;
        /* Remove item from combination because a
         * number that is in the guess twice but the
         * combination once should only be counted once */
        comboArr.splice(comboIndex, 1);
      }
    }
  }
  return { correctNums, correctPlacements };
};

export default generateClues;
