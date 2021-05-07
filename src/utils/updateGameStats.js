const updateGameStats = (mode, games) => {
  const newGameStats = games;
  newGameStats[mode] += 1;
  return newGameStats;
};

export default updateGameStats;
