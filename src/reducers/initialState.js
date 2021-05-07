const initialState = {
  status: 'running',
  guesses: [],
  combo: '',
  gamesWon: {
    easy: 0,
    normal: 0,
  },
  gamesLost: {
    easy: 0,
    normal: 0,
  },
  bestTime: {
    easy: -1,
    normal: -1,
  },
  mode: 'normal',
  max: 7,
  time: {
    elapsed: 0,
    start: 0,
  },
  hint: 'Need a hint?',
};

export default initialState;
