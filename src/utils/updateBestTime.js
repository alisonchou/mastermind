const updateBestTime = (mode, bestTime, timeInSecs) => {
  const newBestTime = bestTime;
  // best time has not been set yet or is more than newest time
  if (bestTime[mode] < 0 || timeInSecs < bestTime[mode]) {
    newBestTime[mode] = timeInSecs;
  }
  return newBestTime;
};

export default updateBestTime;
