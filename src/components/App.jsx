import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  startGame, addGuess,
  winGame, loseGame,
} from '../actions/gameActions';
import { Page, HeaderSpan, Header } from '../styles';
import GameContainer from './GameContainer';

const App = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state);
  const [guess, setGuess] = useState('');

  useEffect(() => {
    dispatch(startGame('normal'));
  }, [dispatch]);

  useEffect(() => {
    if (guess.length >= 4) {
      setTimeout(() => {
        setGuess('');
        dispatch(addGuess(guess));
        if (guess === game.combo) {
          dispatch(winGame(game.mode));
        }
      }, 100);
    }
  }, [guess, game.combo, game.mode, dispatch]);

  useEffect(() => {
    if (
      game.guesses.length === 10
      && game.guesses[0].guess !== game.combo
    ) {
      dispatch(loseGame(game.mode));
    }
  }, [game.combo, game.mode, game.guesses, dispatch]);

  return (
    <Page>
      <Header>
        Mastermind
        <HeaderSpan />
        { `  ${game.combo}` }
      </Header>
      <GameContainer
        combo={game.combo}
        guesses={game.guesses}
        gamesWon={game.gamesWon}
        gamesLost={game.gamesLost}
        bestTime={game.bestTime}
        status={game.status}
        mode={game.mode}
        max={game.max}
        time={game.time.elapsed}
        hint={game.hint}
        guess={guess}
        setGuess={setGuess}
      />
    </Page>
  );
};

export default App;
