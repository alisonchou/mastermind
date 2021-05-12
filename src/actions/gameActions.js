import comboService from '../services/combo';

let timer;

export const updateTime = () => ({
  type: 'UPDATE_TIME',
});

export const startGame = (mode) => async (dispatch) => {
  const max = (mode === 'easy' ? 6 : 7);
  const combo = await comboService.generateCombo(max);
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(
    () => dispatch(updateTime()),
    1000,
  );
  dispatch({
    type: 'START_GAME',
    combo,
    mode,
    max,
  });
};

export const addGuess = (guess) => ({
  type: 'ADD_GUESS',
  guess,
});

export const setHint = () => ({
  type: 'SET_HINT',
});

export const winGame = (mode) => (dispatch) => {
  timer = clearInterval(timer);
  dispatch({
    type: 'WIN_GAME',
    mode,
  });
};

export const loseGame = (mode) => (dispatch) => {
  timer = clearInterval(timer);
  dispatch({
    type: 'LOSE_GAME',
    mode,
  });
};
