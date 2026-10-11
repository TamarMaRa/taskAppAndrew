const calcTip = (total, tipPercent = 0.25) => total + total * tipPercent;

const fahrToCels = (temp) => {
  return (temp - 32) / 1.8;
};

const celsToFahr = (temp) => {
  return temp * 1.8 + 32;
};

module.exports = {
    calcTip,
    fahrToCels,
    celsToFahr
}