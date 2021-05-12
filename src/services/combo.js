import axios from 'axios';

const generateCombo = async (max) => {
  const randomApi = `https://www.random.org/integers/?num=4&min=0&max=${max}&col=1&base=10&format=plain&rnd=new`;
  const randomRes = await axios.get(randomApi);
  /* Converts response from one number
   * per line to all numbers on one line
   * with no spaces */
  return randomRes.data.split('\n').slice(0, -1).join('');
};

const comboService = { generateCombo };

export default comboService;
