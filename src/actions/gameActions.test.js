import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { startGame } from './gameActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('mastermind action creators', () => {
  const initialState = {
    combo: '',
    guesses: [],
  };

  afterEach(() => {
    fetchMock.restore();
  });

  it('should start a normal game with numbers from 0-7', () => {
    const store = mockStore(initialState);

    return store.dispatch(startGame('normal')).then(() => {
      expect(store.getActions()).toMatchObject([{
        type: 'START_GAME',
        combo: expect.stringMatching(/^[0-7]{4}$/),
        mode: 'normal',
        max: 7,
      }]);
    });
  });

  it('should start an easy game with numbers from 0-6', () => {
    const store = mockStore(initialState);

    return store.dispatch(startGame('easy')).then(() => {
      expect(store.getActions()).toMatchObject([{
        type: 'START_GAME',
        combo: expect.stringMatching(/^[0-6]{4}$/),
        mode: 'easy',
        max: 6,
      }]);
    });
  });
});
