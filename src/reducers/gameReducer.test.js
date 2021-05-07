import deepFreeze from 'deep-freeze';
import gameReducer from './gameReducer';
import initialState from './initialState';

describe('mastermind reducer', () => {
  const filledState = {
    combo: '0132',
    guesses: [
      {
        guess: '0102',
        number: 2,
      },
      {
        guess: '2343',
        number: 1,
      },
    ],
  };

  it('should return a proper initial state when called with an undefined state', () => {
    const action = {
      type: 'DO_NOTHING',
    };

    const newState = gameReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  it('should initialize a game with the passed combination value', () => {
    const state = initialState;
    deepFreeze(state);

    const action = {
      type: 'START_GAME',
      combo: '0000',
      mode: 'normal',
    };

    const newState = gameReducer(state, action);
    expect(newState).toMatchObject({
      guesses: [],
      combo: '0000',
    });
  });

  it('should restart a game with the passed combination value', () => {
    const state = filledState;
    deepFreeze(state);

    const action = {
      type: 'START_GAME',
      combo: '0000',
      mode: 'normal',
    };

    const newState = gameReducer(state, action);
    expect(newState).toMatchObject({
      guesses: [],
      combo: '0000',
    });
  });

  it('should add a numbered guess', () => {
    const state = filledState;
    deepFreeze(state);

    const action = {
      type: 'ADD_GUESS',
      guess: '1234',
    };

    const newState = gameReducer(state, action);
    expect(newState).toEqual({
      ...filledState,
      guesses: [
        {
          guess: '1234',
          number: 3,
        },
        ...filledState.guesses,
      ],
    });
  });
});
