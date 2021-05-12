/* Receives gamesWon or gamesLost
 * as "games" parameter and
 * increments the count for the
 * game mode the player won or
 * lost in */
const updateGameStats = (mode, games) => {
  const newGameStats = games;
  newGameStats[mode] += 1;
  return newGameStats;
};

export default updateGameStats;
