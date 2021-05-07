const formatVal = (val) => val.toString().padStart(2, '0');

const formatSeconds = (seconds) => {
  const allMinutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const minutes = allMinutes % 60;
  const hours = Math.floor(allMinutes / 60);
  return `${hours}:${formatVal(minutes)}:${formatVal(secs)}`;
};

export default formatSeconds;
