import initialState from './initialState';
import updateGameStats from '../utils/updateGameStats';
import updateBestTime from '../utils/updateBestTime';
import generateHint from '../utils/generateHint';

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        status: initialState.status,
        guesses: initialState.guesses,
        hint: initialState.hint,
        combo: action.combo,
        mode: action.mode,
        max: action.max,
        time: {
          elapsed: 0,
          start: Date.now(),
        },
      };
    case 'ADD_GUESS':
      return {
        ...state,
        /* Adds guess to front of array
         * so that guess history is ordered
         * by most recent */
        guesses: ([{
          guess: action.guess,
          number: state.guesses.length + 1,
        }].concat(state.guesses)),
      };
    case 'SET_HINT':
      return {
        ...state,
        hint: generateHint(state.guesses[0].guess, state.combo, state.max),
      };
    case 'UPDATE_TIME':
      return {
        ...state,
        time: {
          ...state.time,
          /* Subtracts current time from
           * starting time and convert
           * to seconds */
          elapsed: Math.floor((Date.now() - state.time.start) / 1000),
        },
      };
    case 'WIN_GAME':
      return {
        ...state,
        status: 'won',
        ...updateBestTime(action.mode, state.bestTime, state.time.elapsed),
        ...updateGameStats(action.mode, state.gamesWon),
      };
    case 'LOSE_GAME':
      return {
        ...state,
        status: 'lost',
        ...updateGameStats(action.mode, state.gamesLost),
      };
    default:
      return state;
  }
};

export default gameReducer;
